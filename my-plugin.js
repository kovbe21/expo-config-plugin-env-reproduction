module.exports = function withMyPlugin(config, props) {
    // Modify the config
    console.warn('config plugin runs', { props, directAccess: process.env.EXPO_PUBLIC_APP_VARIANT});
    if (!props.variant) {
      console.error('No props value in config plugin');
      throw new Error("Variant is missing in my config plugin");
    }
    // Return the results
    return { ...config, custom: props.variant };
  };
  