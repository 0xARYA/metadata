### >  metadata

> *A futile attempt to organize my reverse engineering efforts and tools regarding Amazon's "metadata1" script/system.*

## 🛣️ Roadmap

### Deobfuscator
- [x] **Basic Deobfuscation**
- [ ] **Split Webpack Modules**
- [ ] **Split Chained Declarations**
- [ ] **Implement "[Nice 2 Predict](https://github.com/eth-srl/Nice2Predict)"**

### Generator
- [x] **Static Generation**
- [ ] **Dynamic Generation** *- Based Off Static Analysis Of The Live Version Of The Script*
- [ ] **Utilize A Static Value Database** *- Increases Payload Variance*

### Analyzer
- [ ] **Static Value Extraction**
- [ ] **Collector Extraction**
- [ ] **Collector Update/Change Detection**

### Monitor
- [ ] **Monitor Script Changes/Updates**

### Metadata Composition
- **Mouse** *- Click Count, Coordinates, Interval, etc.*
- **Keyboard** *- Keystrokes, Keystroke Interval, etc.*
- **Page** *- Dynamic Script List, Static Script Content Hash, etc.*
- **Form Input** *- Content Hash, etc.*
- **Browser Information** *- userAgent, Location, Reference Page, etc.*
- **Browser Compatibility** *- CSS/JS Compatiblity Detection, etc.*
- **Script Performance** *- Event Related Trigger Time*
- **localStrorage** *- Unique "ubid"*
- **GPU** *- Supported Extensions, etc.*
- **Canvas** *- Standard Canvas Fingerprinting*