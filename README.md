<div align="center">
        <a href="https://react-hook-form.com" title="React Hook Form - Simple React forms validation">
            <img src="https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/logo.png" alt="React Hook Form Logo - React hook custom hook for form validation" />
        </a>
</div>

## Development

### Install

> **Note**
> use [pnpm](https://pnpm.io/) only

```bash
# extension
pnpm install
# example website
cd example
pnpm install
```

### Start

1. Start example website

```bash
cd example
pnpm run dev
```

2. Start extension in development mode

```bash
pnpm run dev
```

3. Open Chrome and navigate to `chrome://extensions`

4. Enable **Developer mode**

5. Click **Load unpacked** button and select `/dist`

### Messaging Flow

```mermaid
sequenceDiagram
  participant Webpage
  participant Content Script
  participant Background
  participant Devtools
  participant Popup
  Content Script->>Webpage: INIT
  Note left of Webpage: Browser is using devtool
  Webpage->>Content Script: WELCOME
  Content Script->>Background: WELCOME
  Note right of Background: Webpage is using rhf
  Note right of Background: Cache enabled tab
  par
    Popup->>Background: get-enable-status
  and
    Devtools->>Background: get-enable-status
  end
  loop
    Webpage->>Content Script: UPDATE
    Content Script->>Background: UPDATE
    Note over Webpage,Background: Data
  end
  Note right of Background: Cache data
  loop Every 100ms
    Devtools->>Background: get-devtool-data
    Background-->>Devtools: Data (Callback)
  end
```
