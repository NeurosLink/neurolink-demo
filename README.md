# NeuroLink AI Toolkit - Interactive Demo

<!-- TOC -->

- [🚀 Next Steps](#[object Object])
- [📞 Support](#-support)
<!-- /TOC -->

🧠 **Complete working demo showcasing the NeuroLink SDK with 9 major AI providers**

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd neurolink-demo
pnpm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and add your API keys:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-key-here
OPENAI_MODEL=gpt-4o

# AWS Bedrock Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_SESSION_TOKEN=your-session-token  # If using temporary credentials
AWS_REGION=us-east-2
BEDROCK_MODEL=arn:aws:bedrock:us-east-2:225681119357:inference-profile/us.anthropic.claude-3-7-sonnet-20250219-v1:0

# Google Vertex AI Configuration (choose one authentication method)
GOOGLE_VERTEX_PROJECT=your_project_id
GOOGLE_VERTEX_LOCATION=us-east5

# Method 1: Service Account File (Recommended for Production)
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json

# Method 2: Service Account JSON String (Good for Containers/Cloud)
# GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"your-project",...}

# Method 3: Individual Environment Variables (Good for CI/CD)
# GOOGLE_AUTH_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
# GOOGLE_AUTH_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----"

# Google AI Studio Configuration
GOOGLE_AI_API_KEY=AIza-your-google-ai-api-key
GOOGLE_AI_MODEL=gemini-2.5-pro

# Anthropic Configuration
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
ANTHROPIC_MODEL=claude-3-5-sonnet-20241022

# Azure OpenAI Configuration
AZURE_OPENAI_API_KEY=your_azure_api_key
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
AZURE_OPENAI_DEPLOYMENT=your-deployment-name
AZURE_MODEL=gpt-4o

# Hugging Face Configuration
HUGGINGFACE_API_KEY=hf_your_huggingface_token
HUGGINGFACE_MODEL=microsoft/DialoGPT-medium

# Ollama Configuration (Local AI)
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama2

# Mistral AI Configuration
MISTRAL_API_KEY=your_mistral_api_key
MISTRAL_MODEL=mistral-small

# Demo Configuration
PORT=9876
DEFAULT_PROVIDER=openai
ENABLE_STREAMING=true
ENABLE_FALLBACK=true
```

### 3. Start the Demo Server

```bash
pnpm start
```

### 4. Open Demo Interface

Visit **http://localhost:9876** in your browser

## 🎯 What You'll See

### Interactive Web Interface

- **🚀 Basic Examples**: Provider testing, schema validation, performance benchmarks
- **💼 Business Use Cases**: Email generation, data analysis, document summarization
- **🎨 Creative Tools**: Creative writing, translation, content ideas
- **👨‍💻 Developer Tools**: Code generation, API documentation, debug analysis
- **📊 Monitoring**: Usage analytics and provider status

### Real AI Integration

- Live text generation with multiple AI providers
- Auto-selection of best available provider
- Real-time performance metrics
- Structured data generation with schema validation
- Interactive examples across business and creative domains

## 📋 Available API Endpoints

### Core Endpoints

- `GET /` - Interactive demo web interface
- `GET /api/status` - Provider configuration and health check
- `POST /api/generate` - Text generation with provider selection
- `POST /api/schema` - Structured data generation with validation
- `POST /api/benchmark` - Performance comparison across providers

### Business Use Cases

- `POST /api/business/email` - Professional email generation
- `POST /api/business/analyze-data` - CSV data analysis and insights
- `POST /api/business/summarize` - Document summarization

### Creative Tools

- `POST /api/creative/writing` - Creative content generation
- `POST /api/creative/translate` - Multi-language translation
- `POST /api/creative/ideas` - Content ideation for various formats

### Developer Tools

- `POST /api/developer/code` - Code generation across languages
- `POST /api/developer/api-doc` - API documentation generation
- `POST /api/developer/debug` - Error analysis and debugging help

### Analytics

- `GET /api/analytics` - Usage statistics and performance metrics

## 🖥️ CLI Integration Examples

### Using the NeuroLink CLI with Demo Server

```bash
# Start the demo server in one terminal
pnpm start

# In another terminal, use the CLI to interact with the same providers:

# Basic text generation using CLI
npx @neuroslink/neurolink generate "Write a haiku about programming"

# Compare with server API
curl -X POST http://localhost:9876/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a haiku about programming", "provider": "auto"}'

# Check provider status with CLI
npx @neuroslink/neurolink status --verbose

# Batch process multiple prompts with CLI
echo -e "Explain AI\nWrite a poem\nGenerate code" > prompts.txt
npx @neuroslink/neurolink batch prompts.txt --output cli-results.json

# Stream real-time generation
npx @neuroslink/neurolink stream "Tell me a story about robots"
```

### CLI vs API Comparison

```bash
# CLI approach (simple, scriptable)
npx @neuroslink/neurolink generate "Hello world" --format json

# API approach (programmatic integration)
curl -X POST http://localhost:9876/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello world", "provider": "auto"}'
```

## 🧪 Testing with curl

### Basic Text Generation

```bash
curl -X POST http://localhost:9876/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a haiku about artificial intelligence", "provider": "auto"}'
```

### Schema Validation

```bash
curl -X POST http://localhost:9876/api/schema \
  -H "Content-Type: application/json" \
  -d '{"type": "user-profile"}'
```

### Business Email Generation

```bash
curl -X POST http://localhost:9876/api/business/email \
  -H "Content-Type: application/json" \
  -d '{"type": "marketing", "context": "New AI product launch"}'
```

### Performance Benchmark

```bash
curl -X POST http://localhost:9876/api/benchmark \
  -H "Content-Type: application/json" \
  -d '{}'
```

### Provider Status Check

```bash
curl http://localhost:9876/api/status
```

## 🎬 Complete Visual Documentation Ecosystem

### 🌐 **Web Demo Visual Content** ✅

#### **📸 Interactive Web Interface Screenshots**

| Feature                    | Screenshot                                                                                                | Description                          |
| -------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **Main Interface**         | ![Main Interface](./screenshots/01-overview/01-main-interface-overview-2025-06-04T13-56-43-628Z.png)      | Complete web interface dashboard     |
| **AI Generation Results**  | ![AI Generation](./screenshots/02-basic-examples/02-ai-generation-results-2025-06-04T13-57-13-156Z.png)   | Real AI content generation in action |
| **Business Use Cases**     | ![Business Cases](./screenshots/03-business-use-cases/03-business-use-cases-2025-06-04T13-59-07-846Z.png) | Professional business applications   |
| **Creative Tools**         | ![Creative Tools](./screenshots/04-creative-tools/04-creative-tools-2025-06-04T13-59-24-346Z.png)         | Creative content generation          |
| **Developer Tools**        | ![Developer Tools](./screenshots/05-developer-tools/05-developer-tools-2025-06-04T13-59-43-322Z.png)      | Code generation and API docs         |
| **Analytics & Monitoring** | ![Monitoring](./screenshots/06-monitoring/06-monitoring-analytics-2025-06-04T14-00-08-919Z.png)           | Real-time provider analytics         |

#### **🎥 Demo Videos** _(5,681+ tokens of real AI generation)_

- **[Basic Examples](./videos/basic-examples.webm)** - Text generation, haiku creation, storytelling (529 tokens)
- **[Business Use Cases](./videos/business-use-cases.webm)** - Email generation, analysis, summaries (1,677 tokens)
- **[Creative Tools](./videos/creative-tools.webm)** - Stories, translation, creative ideas (1,174 tokens)
- **[Developer Tools](./videos/developer-tools.webm)** - React code, API docs, debugging help (2,301 tokens)
- **[Monitoring & Analytics](./videos/monitoring-analytics.webm)** - Live provider status and performance

### 🖥️ **CLI Integration Visual Content** ✅

#### **📸 Professional CLI Screenshots** _(Latest: June 10, 2025)_

| Command                     | Screenshot                                                                                                        | Description                          |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **CLI Help Overview**       | ![CLI Help](../docs/visual-content/screenshots/cli-screenshots/01-cli-help-2025-06-10T12-00-00.png)               | Complete command reference           |
| **Provider Status**         | ![Provider Status](../docs/visual-content/screenshots/cli-screenshots/02-provider-status-2025-06-10T12-00-00.png) | All provider connectivity verified   |
| **Text Generation**         | ![Text Generation](../docs/visual-content/screenshots/cli-screenshots/03-text-generation-2025-06-10T12-00-00.png) | Real AI haiku generation with JSON   |
| **Auto Provider Selection** | ![Best Provider](../docs/visual-content/screenshots/cli-screenshots/04-best-provider-2025-06-10T12-00-00.png)     | Automatic provider selection working |
| **Batch Processing**        | ![Batch Results](../docs/visual-content/screenshots/cli-screenshots/05-batch-results-2025-06-10T12-00-00.png)     | Multi-prompt processing with results |

#### **🎥 CLI Demonstration Videos** _(Real command execution)_

- **[CLI Overview](../docs/visual-content/cli-videos/cli-01-cli-help.mp4)** - Help, status, provider selection commands
- **[Provider Status](../docs/visual-content/cli-videos/cli-02-provider-status.mp4)** - Provider connectivity testing
- **[Text Generation](../docs/visual-content/cli-videos/cli-03-text-generation.mp4)** - Text generation with different providers
- **[Auto Selection](../docs/visual-content/cli-videos/cli-04-auto-selection.mp4)** - Automatic provider selection
- **[Streaming](../docs/visual-content/cli-videos/cli-05-streaming.mp4)** - Real-time streaming
- **[Advanced Features](../docs/visual-content/cli-videos/cli-06-advanced-features.mp4)** - Verbose diagnostics and provider options

### 🔧 **MCP (Model Context Protocol) Integration** ✅

#### **📸 MCP CLI Screenshots** _(Generated Jan 10, 2025)_

| Command                  | Screenshot                                                                                       | Description                             |
| ------------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------- |
| **MCP Help Overview**    | ![MCP Help](../docs/visual-content/screenshots/mcp-cli/01-mcp-help-2025-06-10.png)               | Complete MCP command reference          |
| **Server Installation**  | ![Install Server](../docs/visual-content/screenshots/mcp-cli/02-mcp-install-2025-06-10.png)      | Installing external MCP servers         |
| **Server Status Check**  | ![Server Status](../docs/visual-content/screenshots/mcp-cli/03-mcp-list-status-2025-06-10.png)   | MCP server connectivity and status      |
| **Server Testing**       | ![Test Server](../docs/visual-content/screenshots/mcp-cli/04-mcp-test-server-2025-06-10.png)     | Testing MCP server connectivity         |
| **Custom Server Setup**  | ![Custom Server](../docs/visual-content/screenshots/mcp-cli/05-mcp-custom-server-2025-06-10.png) | Adding custom MCP server configurations |
| **Workflow Integration** | ![Workflow Demo](../docs/visual-content/screenshots/mcp-cli/06-mcp-workflow-demo-2025-06-10.png) | Complete MCP workflow demonstrations    |

#### **🎥 MCP Demo Videos** _(Real MCP server integration)_

- **[Server Management Demo](./videos/mcp-demos/mcp-server-management-demo.mp4)** - Installing, configuring, and testing MCP servers (~45s)

**Note**: Additional MCP demo videos are in development. The server management demo showcases the core MCP integration capabilities.

**MCP Features**: Demonstrates external server connectivity, tool discovery, and workflow integration capabilities for extending NeuroLink functionality.

### 🎯 **Complete Visual Ecosystem Benefits**

- ✅ **No Installation Required** - See everything in action before installing
- ✅ **Real AI Content** - All screenshots and videos show actual AI generation
- ✅ **Professional Quality** - 1920x1080 resolution suitable for documentation
- ✅ **Complete Coverage** - Every major feature visually documented
- ✅ **CLI + Web Integration** - Both interfaces comprehensively documented
- ✅ **Production Validation** - Demonstrates real-world usage patterns

### 📊 **Visual Content Metrics**

- **📸 Total Screenshots**: 11 professional captures (Web: 6, CLI: 5)
- **🎥 Total Videos**: 10 demonstration videos (Web: 5, CLI: 5)
- **🤖 AI Content Generated**: 5,681+ tokens during video creation
- **📁 Organization**: Structured folders with descriptive names
- **🎨 Quality**: Professional 1920x1080 resolution throughout

## 🧪 Testing Guide

### Overview of Test Categories

#### 1. Provider Configuration Tests

**Purpose**: Verify all providers are properly configured

```bash
pnpm run test:config
```

#### 2. API Integration Tests

**Purpose**: Test actual API calls with real credentials

```bash
pnpm run test:api
```

#### 3. Fallback Mechanism Tests

**Purpose**: Verify automatic provider fallback

```bash
pnpm run test:fallback
```

#### 4. Performance Benchmark Tests

**Purpose**: Compare response times across providers

```bash
pnpm run test:performance
```

#### 5. Streaming Tests

**Purpose**: Test real-time streaming capabilities

```bash
pnpm run test:streaming
```

### Comprehensive Test Suite

#### Run All Tests

```bash
pnpm test
```

#### Individual Test Categories

```bash
# Configuration validation
pnpm run test:config

# API functionality
pnpm run test:api

# Error handling
pnpm run test:errors

# Performance metrics
pnpm run test:performance

# Web interface
pnpm run test:web
```

### Test Case Descriptions

#### 1. Provider Configuration Tests

- ✅ Environment variable validation
- ✅ API credential verification
- ✅ Provider initialization
- ✅ Authentication method detection

#### 2. API Integration Tests

- ✅ Text generation with real prompts
- ✅ Response format validation
- ✅ Usage statistics verification
- ✅ Model-specific parameter testing

#### 3. Error Handling Tests

- ✅ Invalid credential handling
- ✅ Network timeout scenarios
- ✅ Rate limiting responses
- ✅ Malformed request handling

#### 4. Streaming Tests

- ✅ Real-time text streaming
- ✅ Stream interruption handling
- ✅ Chunk assembly verification
- ✅ Connection stability testing

#### 5. Performance Tests

- ✅ Response time measurement
- ✅ Provider comparison metrics
- ✅ Concurrent request handling
- ✅ Memory usage monitoring

### Custom Test Scenarios

#### Test with Specific Provider

```bash
# Test OpenAI only
PROVIDER=openai pnpm test

# Test Bedrock only
PROVIDER=bedrock pnpm test

# Test Vertex AI only
PROVIDER=vertex pnpm test
```

#### Test with Custom Prompts

```bash
# Test with long prompts
PROMPT_TYPE=long pnpm test

# Test with complex prompts
PROMPT_TYPE=complex pnpm test

# Test with multilingual prompts
PROMPT_TYPE=multilingual pnpm test
```

## 📡 API Documentation

### Base URL

```
http://localhost:9876
```

### Endpoints

#### GET `/`

**Description**: Interactive web interface
**Response**: HTML demo page

#### GET `/api/status`

**Description**: Provider status and configuration
**Response**:

```json
{
  "timestamp": "2025-06-04T10:17:00Z",
  "providers": {
    "openai": {
      "available": true,
      "model": "gpt-4o",
      "configured": true
    },
    "bedrock": {
      "available": true,
      "model": "anthropic.claude-3-sonnet-20240229-v1:0",
      "configured": true
    },
    "vertex": {
      "available": true,
      "model": "gemini-2.5-pro",
      "configured": true
    }
  },
  "bestProvider": "bedrock"
}
```

#### POST `/api/generate`

**Description**: Generate text using specified provider
**Request**:

```json
{
  "provider": "openai|bedrock|vertex|auto",
  "prompt": "Your prompt here",
  "maxTokens": 500,
  "temperature": 0.7
}
```

**Response**:

```json
{
  "success": true,
  "content": "Generated text response",
  "provider": "openai",
  "model": "gpt-4o",
  "responseTime": 1250,
  "usage": {
    "promptTokens": 15,
    "completionTokens": 42,
    "totalTokens": 57
  }
}
```

#### POST `/api/stream`

**Description**: Stream text generation in real-time
**Request**: Same as `/api/generate`
**Response**: Server-sent events stream

#### POST `/api/test-fallback`

**Description**: Test automatic provider fallback
**Request**:

```json
{
  "prompt": "Test prompt for fallback"
}
```

**Response**:

```json
{
  "timestamp": "2025-06-04T10:17:00Z",
  "attempts": [
    {
      "provider": "openai",
      "status": "failed",
      "error": "Rate limit exceeded"
    },
    { "provider": "bedrock", "status": "success", "responseTime": 890 }
  ],
  "success": true,
  "finalResult": {
    "provider": "bedrock",
    "content": "Generated content"
  }
}
```

#### POST `/api/benchmark`

**Description**: Performance comparison across providers
**Response**:

```json
{
  "timestamp": "2025-06-04T10:17:00Z",
  "results": {
    "openai": {
      "success": true,
      "responseTime": 1200,
      "model": "gpt-4o",
      "contentLength": 156
    },
    "bedrock": {
      "success": true,
      "responseTime": 890,
      "model": "anthropic.claude-3-sonnet-20240229-v1:0",
      "contentLength": 142
    },
    "vertex": {
      "success": false,
      "error": "Authentication failed"
    }
  }
}
```

#### POST `/api/schema`

**Description**: Test structured output generation
**Response**:

```json
{
  "success": true,
  "structuredData": {
    "name": "Alice Johnson",
    "age": 28,
    "occupation": "Software Engineer",
    "hobbies": ["reading", "hiking", "photography"]
  },
  "provider": "auto-selected"
}
```

## 🔧 Troubleshooting

### Provider Configuration Issues

#### OpenAI Setup

- Ensure valid API key from https://platform.openai.com/api-keys
- Check account has credits and access to GPT-4
- Verify no rate limiting or usage restrictions

#### AWS Bedrock Setup

- Configure AWS credentials with Bedrock access
- Ensure account has Claude model permissions
- Use full inference profile ARN format for Anthropic models
- Check AWS region configuration matches model availability

#### Google Vertex AI Setup

- Enable Vertex AI API in Google Cloud Console
- Configure service account with appropriate permissions
- Ensure project billing is enabled
- Verify model access in your region

### Common Error Messages

**"Provider not available"**

- Check API key configuration
- Verify internet connectivity
- Confirm account permissions

**"Invalid model specified"**

- Use correct model names for each provider
- Check model availability in your region
- Verify account access to specific models

**"Auto-selection failed"**

- Ensure at least one provider is properly configured
- Check provider priority order in configuration
- Verify fallback mechanisms are enabled

### Performance Issues

**Slow Response Times**

- Check network connectivity
- Verify provider region settings
- Consider switching to faster providers for testing

**High Token Usage**

- Adjust maxTokens parameters
- Use more specific prompts
- Implement response caching for repeated requests

## 📊 Demo Statistics Tracking

The demo includes built-in analytics tracking:

- **Request Counts**: Total API calls made
- **Token Usage**: Cumulative token consumption
- **Provider Performance**: Response times and success rates
- **Error Tracking**: Failed requests and error patterns
- **Usage Patterns**: Most popular endpoints and features

## 🎯 Production Considerations

This demo showcases production-ready patterns:

### Security

- Environment variable configuration
- Error handling and validation
- Rate limiting considerations
- API key management

### Performance

- Provider fallback mechanisms
- Response caching strategies
- Optimal model selection
- Token usage optimization

### Monitoring

- Usage analytics and reporting
- Provider health checking
- Error logging and alerting
- Performance metrics tracking

## 🌟 Key Features Demonstrated

### 1. **Multi-Provider Support (9 Providers)**

- **OpenAI** - GPT-4o and GPT-4-turbo models
- **Amazon Bedrock** - Claude 3 models via AWS
- **Google Vertex AI** - Gemini Pro models
- **Google AI Studio** - Gemini 1.5 Pro with free tier
- **Anthropic** - Claude 3.5 Sonnet direct API
- **Azure OpenAI** - Enterprise Azure deployments
- **Hugging Face** - 100,000+ open source models
- **Ollama** - Local AI with complete privacy
- **Mistral AI** - European GDPR-compliant AI
- Intelligent auto-selection across all providers

### 2. **Comprehensive Use Cases**

- Business applications (emails, data analysis, summarization)
- Creative tools (writing, translation, ideation)
- Developer utilities (code generation, documentation, debugging)
- Advanced features (schema validation, batch processing)

### 3. **Production-Ready Patterns**

- Robust error handling
- Performance monitoring
- Usage analytics
- Provider fallbacks

### 4. **Interactive Learning**

- Real-time AI generation
- Immediate feedback and results
- Performance comparisons
- Best practice examples

## 🚀 Next Steps

1. **Run the Demo**: Start the server and explore all features
2. **Test with Real APIs**: Configure your credentials and see live AI generation
3. **Examine Code Patterns**: Review server implementation for integration examples
4. **Record Visual Content**: Use for creating screenshots and video demonstrations
5. **Integrate SDK**: Apply patterns learned to your own projects

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify your environment configuration
3. Test individual providers using the status endpoint
4. Review console logs for detailed error information
5. Ensure all dependencies are properly installed

---

**🧠 NeuroLink SDK Demo** - Showcasing the power of unified AI provider integration with real-world use cases and production-ready patterns.
