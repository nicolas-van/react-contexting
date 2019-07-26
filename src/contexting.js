import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/**
 * Redirects a context to the property of a component.
 * @param {*} component The component
 * @param {*} propName A property name
 * @param {*} context The context
 * @return {*} A new component
 */
function connectContext(component, propName, context) {
  const Component = component;
  // eslint-disable-next-line react/display-name
  return (props) => (
    <context.Consumer>
      {(state) => <Component {...props} {... {[propName]: state}} />}
    </context.Consumer>
  );
}

/**
 * Bind some context values to the properties of a component.
 * @param {*} component A component
 * @param {object} propNamesToContexts An object whose values are property names and keys are contexts.
 * @return {*} A new component
 */
export function connectContexts(component, propNamesToContexts) {
  let current = component;
  for (const [key, value] of _.toPairs(propNamesToContexts)) {
    current = connectContext(current, key, value);
  }
  return current;
}

/**
 * Provide values to multiple contexts at the same time.
 * @param {*} props The props
 * @return {*} DOM
 */
export function ContextsProvider({mapping, children}) {
  let current = children;
  for (const [context, value] of mapping) {
    current = (
      <context.Provider value={value}>
        {current}
      </context.Provider>
    );
  }
  return current;
};
ContextsProvider.propTypes = {
  mapping: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired,
};
