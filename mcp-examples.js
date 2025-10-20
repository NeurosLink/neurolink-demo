/**
 * MCP (Model Context Protocol) Examples for NeuroLink Demo
 *
 * This file contains comprehensive examples of MCP server integration,
 * demonstrating external server connectivity for extended functionality.
 *
 * Usage:
 *   node mcp-examples.js
 *
 * Prerequisites:
 *   - MCP servers installed (filesystem, github, postgres, etc.)
 *   - Environment variables configured
 *   - NeuroLink CLI available
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

/**
 * Execute NeuroLink MCP command and return result
 */
function executeMCPCommand(command, args = [], options = {}) {
  try {
    const fullCommand = `npx @neuroslink/neurolink mcp ${command} ${args.join(" ")}`;
    console.log(`\n🔧 Executing: ${fullCommand}`);

    const result = execSync(fullCommand, {
      encoding: "utf8",
      stdio: "pipe",
      timeout: 10000,
      ...options,
    });

    console.log("✅ Success:", result.trim());
    return { success: true, output: result.trim() };
  } catch (error) {
    console.log("❌ Error:", error.message);
    return { success: false, error: error.message, output: error.stdout || "" };
  }
}

/**
 * MCP Server Management Examples
 */
class MCPServerExamples {
  /**
   * Example 1: Install Popular MCP Servers
   */
  async installPopularServers() {
    console.log("\n🚀 Example 1: Installing Popular MCP Servers");
    console.log("=".repeat(50));

    const popularServers = [
      "filesystem",
      "github",
      "postgres",
      "puppeteer",
      "brave-search",
    ];

    for (const server of popularServers) {
      console.log(`\n📦 Installing ${server} server...`);
      const result = executeMCPCommand("install", [server]);

      if (result.success) {
        console.log(`✅ ${server} server installed successfully`);
      } else {
        console.log(
          `⚠️  ${server} server installation failed: ${result.error}`,
        );
      }
    }
  }

  /**
   * Example 2: Test Server Connectivity
   */
  async testServerConnectivity() {
    console.log("\n🔍 Example 2: Testing Server Connectivity");
    console.log("=".repeat(50));

    // List all configured servers
    console.log("\n📋 Listing configured servers...");
    const listResult = executeMCPCommand("list", ["--status"]);

    if (listResult.success) {
      const servers = this.parseServerList(listResult.output);

      // Test connectivity for each server
      for (const server of servers) {
        console.log(`\n🔌 Testing ${server} connectivity...`);
        const testResult = executeMCPCommand("test", [server]);

        if (testResult.success) {
          console.log(`✅ ${server} is connected and responsive`);
        } else {
          console.log(`❌ ${server} connection failed: ${testResult.error}`);
        }
      }
    }
  }

  /**
   * Example 3: Filesystem Operations
   */
  async filesystemOperations() {
    console.log("\n📁 Example 3: Filesystem Operations");
    console.log("=".repeat(50));

    // Create a test file for operations
    const testFile = path.join(__dirname, "mcp-test.txt");
    const testContent =
      "Hello from NeuroLink MCP Integration!\nThis file demonstrates filesystem operations.";

    try {
      fs.writeFileSync(testFile, testContent);
      console.log(`✅ Created test file: ${testFile}`);

      // Test file reading
      console.log("\n📖 Reading file content...");
      const readResult = executeMCPCommand("execute", [
        "filesystem",
        "read_file",
        `--path="${testFile}"`,
      ]);

      if (readResult.success) {
        console.log("✅ File content read successfully");
        console.log("📄 Content:", readResult.output);
      }

      // Test directory listing
      console.log("\n📂 Listing directory contents...");
      const listResult = executeMCPCommand("execute", [
        "filesystem",
        "list_directory",
        `--path="${__dirname}"`,
      ]);

      if (listResult.success) {
        console.log("✅ Directory listing successful");
        console.log("📁 Contents:", listResult.output);
      }

      // Cleanup
      fs.unlinkSync(testFile);
      console.log("🧹 Cleaned up test file");
    } catch (error) {
      console.log("❌ Filesystem operations failed:", error.message);
    }
  }

  /**
   * Example 4: GitHub Integration (if configured)
   */
  async githubIntegration() {
    console.log("\n🐙 Example 4: GitHub Integration");
    console.log("=".repeat(50));

    // Check if GitHub server is available
    const testResult = executeMCPCommand("test", ["github"]);

    if (!testResult.success) {
      console.log("⚠️  GitHub server not available. Skipping GitHub examples.");
      return;
    }

    // Get repository information
    console.log("\n📚 Getting repository information...");
    const repoResult = executeMCPCommand("execute", [
      "github",
      "get_repository",
      '--owner="NeurosLink"',
      '--repo="neurolink"',
    ]);

    if (repoResult.success) {
      console.log("✅ Repository information retrieved");
      console.log("📊 Repository data:", repoResult.output);
    }

    // List recent issues
    console.log("\n🐛 Listing recent issues...");
    const issuesResult = executeMCPCommand("execute", [
      "github",
      "list_issues",
      '--owner="NeurosLink"',
      '--repo="neurolink"',
      '--state="open"',
    ]);

    if (issuesResult.success) {
      console.log("✅ Issues retrieved successfully");
      console.log("📋 Issues:", issuesResult.output);
    }
  }

  /**
   * Example 5: Database Operations (if configured)
   */
  async databaseOperations() {
    console.log("\n🗄️  Example 5: Database Operations");
    console.log("=".repeat(50));

    // Check if database server is available
    const testResult = executeMCPCommand("test", ["postgres"]);

    if (!testResult.success) {
      console.log(
        "⚠️  Database server not available. Skipping database examples.",
      );
      return;
    }

    // List database tables
    console.log("\n📋 Listing database tables...");
    const tablesResult = executeMCPCommand("execute", [
      "postgres",
      "list_tables",
    ]);

    if (tablesResult.success) {
      console.log("✅ Database tables retrieved");
      console.log("🗂️  Tables:", tablesResult.output);
    }

    // Execute a simple query
    console.log("\n🔍 Executing sample query...");
    const queryResult = executeMCPCommand("execute", [
      "postgres",
      "execute_query",
      '--query="SELECT version()"',
    ]);

    if (queryResult.success) {
      console.log("✅ Query executed successfully");
      console.log("📊 Result:", queryResult.output);
    }
  }

  /**
   * Example 6: Web Browsing with Puppeteer (if configured)
   */
  async webBrowsingOperations() {
    console.log("\n🌐 Example 6: Web Browsing Operations");
    console.log("=".repeat(50));

    // Check if Puppeteer server is available
    const testResult = executeMCPCommand("test", ["puppeteer"]);

    if (!testResult.success) {
      console.log(
        "⚠️  Puppeteer server not available. Skipping web browsing examples.",
      );
      console.log("💡 Install puppeteer MCP server to enable web browsing.");
      return;
    }

    // Navigate to a webpage
    console.log("\n🚀 Navigating to example website...");
    const navigateResult = executeMCPCommand("execute", [
      "puppeteer",
      "navigate",
      '--url="https://example.com"',
    ]);

    if (navigateResult.success) {
      console.log("✅ Navigation successful");

      // Take a screenshot
      console.log("\n📸 Taking screenshot...");
      const screenshotResult = executeMCPCommand("execute", [
        "puppeteer",
        "screenshot",
        '--name="example-page"',
      ]);

      if (screenshotResult.success) {
        console.log("✅ Screenshot captured successfully");
        console.log("🖼️  Screenshot:", screenshotResult.output);
      }
    }
  }

  /**
   * Example 7: Custom Server Configuration
   */
  async customServerConfiguration() {
    console.log("\n⚙️  Example 7: Custom Server Configuration");
    console.log("=".repeat(50));

    // Add a custom Python MCP server
    console.log("\n🐍 Adding custom Python MCP server...");
    const addResult = executeMCPCommand("add", [
      "custom-python",
      '"python /path/to/custom/server.py"',
    ]);

    if (addResult.success) {
      console.log("✅ Custom Python server added");
    }

    // Add a custom Node.js MCP server
    console.log("\n📦 Adding custom Node.js MCP server...");
    const addNodeResult = executeMCPCommand("add", [
      "custom-node",
      '"node /path/to/custom/server.js"',
    ]);

    if (addNodeResult.success) {
      console.log("✅ Custom Node.js server added");
    }

    // Add an SSE-based MCP server
    console.log("\n📡 Adding SSE-based MCP server...");
    const addSSEResult = executeMCPCommand("add", [
      "custom-sse",
      '"sse://https://api.example.com/mcp"',
    ]);

    if (addSSEResult.success) {
      console.log("✅ Custom SSE server added");
    }

    // List all configured servers including custom ones
    console.log("\n📋 Listing all configured servers...");
    const listResult = executeMCPCommand("list", ["--status"]);

    if (listResult.success) {
      console.log("✅ Server list retrieved");
      console.log("🗂️  All servers:", listResult.output);
    }
  }

  /**
   * Helper method to parse server list output
   */
  parseServerList(output) {
    const lines = output.split("\n");
    const servers = [];

    for (const line of lines) {
      // Extract server names from the output
      // This is a simplified parser - adjust based on actual CLI output format
      const match = line.match(/^\s*(\w+)\s+/);
      if (match) {
        servers.push(match[1]);
      }
    }

    return servers.filter((server) => server && server !== "Server");
  }
}

/**
 * MCP Error Handling Examples
 */
class MCPErrorHandlingExamples {
  /**
   * Example: Connection Error Handling
   */
  async connectionErrorHandling() {
    console.log("\n🚨 Error Handling: Connection Failures");
    console.log("=".repeat(50));

    // Try to connect to a non-existent server
    console.log("\n❌ Testing connection to non-existent server...");
    const result = executeMCPCommand("test", ["nonexistent-server"]);

    if (!result.success) {
      console.log("✅ Error handled correctly for non-existent server");
      console.log("📝 Error details:", result.error);
    }
  }

  /**
   * Example: Invalid Tool Execution
   */
  async invalidToolExecution() {
    console.log("\n🚨 Error Handling: Invalid Tool Execution");
    console.log("=".repeat(50));

    // Try to execute a non-existent tool
    console.log("\n❌ Testing execution of non-existent tool...");
    const result = executeMCPCommand("execute", [
      "filesystem",
      "nonexistent_tool",
      '--param="test"',
    ]);

    if (!result.success) {
      console.log("✅ Error handled correctly for non-existent tool");
      console.log("📝 Error details:", result.error);
    }
  }

  /**
   * Example: Permission Error Handling
   */
  async permissionErrorHandling() {
    console.log("\n🚨 Error Handling: Permission Errors");
    console.log("=".repeat(50));

    // Try to read a file that doesn't exist or has no permissions
    console.log("\n❌ Testing file permission errors...");
    const result = executeMCPCommand("execute", [
      "filesystem",
      "read_file",
      '--path="/root/restricted.txt"',
    ]);

    if (!result.success) {
      console.log("✅ Permission error handled correctly");
      console.log("📝 Error details:", result.error);
    }
  }
}

/**
 * Main execution function
 */
async function runMCPExamples() {
  console.log("🔧 NeuroLink MCP Examples");
  console.log("=".repeat(50));
  console.log(
    "🎯 Demonstrating external server connectivity and tool execution",
  );
  console.log(
    "📚 Complete MCP integration examples for development reference\n",
  );

  const examples = new MCPServerExamples();
  const errorExamples = new MCPErrorHandlingExamples();

  try {
    // Server Management Examples
    await examples.installPopularServers();
    await examples.testServerConnectivity();

    // Functional Examples
    await examples.filesystemOperations();
    await examples.githubIntegration();
    await examples.databaseOperations();
    await examples.webBrowsingOperations();

    // Configuration Examples
    await examples.customServerConfiguration();

    // Error Handling Examples
    await errorExamples.connectionErrorHandling();
    await errorExamples.invalidToolExecution();
    await errorExamples.permissionErrorHandling();

    console.log("\n🎉 MCP Examples Completed Successfully!");
    console.log("📚 All major MCP functionality demonstrated");
    console.log("🔧 Ready for integration into your projects");
  } catch (error) {
    console.error("\n❌ MCP Examples failed:", error.message);
    console.error("🔍 Check your MCP server configuration and try again");
    process.exit(1);
  }
}

/**
 * Configuration Validation
 */
function validateMCPConfiguration() {
  console.log("\n🔍 Validating MCP Configuration...");

  const configChecks = [
    {
      name: "NeuroLink CLI",
      check: () => {
        try {
          execSync("npx @neuroslink/neurolink --version", { stdio: "pipe" });
          return true;
        } catch {
          return false;
        }
      },
    },
    {
      name: "MCP Config File",
      check: () => {
        const configPath = path.join(process.cwd(), ".mcp-config.json");
        return fs.existsSync(configPath);
      },
    },
    {
      name: "Environment Variables",
      check: () => {
        // Check for common MCP environment variables
        return !!process.env.OPENAI_API_KEY;
      },
    },
  ];

  let allValid = true;

  for (const check of configChecks) {
    const isValid = check.check();
    console.log(
      `${isValid ? "✅" : "❌"} ${check.name}: ${isValid ? "OK" : "Missing"}`,
    );
    if (!isValid) {
      allValid = false;
    }
  }

  if (!allValid) {
    console.log("\n⚠️  Some configuration items are missing.");
    console.log(
      "💡 See docs/MCP-INTEGRATION.md for complete setup instructions.",
    );
  }

  return allValid;
}

// Command line execution
if (require.main === module) {
  console.log("🚀 Starting NeuroLink MCP Examples...");

  // Validate configuration first
  if (!validateMCPConfiguration()) {
    console.log(
      "\n❌ Configuration validation failed. Please fix configuration and try again.",
    );
    process.exit(1);
  }

  // Run examples
  runMCPExamples().catch((error) => {
    console.error("❌ Examples failed:", error.message);
    process.exit(1);
  });
}

// Export for programmatic use
module.exports = {
  MCPServerExamples,
  MCPErrorHandlingExamples,
  runMCPExamples,
  validateMCPConfiguration,
};
