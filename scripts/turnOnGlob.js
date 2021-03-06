const getNetworkService = require("./getNetworkService");
const { execSync } = require("child_process");

module.exports = async port => {
  try {
    const deviceName = await getNetworkService();
    execSync(`networksetup -setsocksfirewallproxy ${deviceName} 127.0.0.1 ${port}`);
    execSync(`networksetup -setsocksfirewallproxystate ${deviceName} on`);
  } catch (error) {
    throw new Error(error);
  }
};
