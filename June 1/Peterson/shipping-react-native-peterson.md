# Shipping w/ Cecelia Martinez

Mobile Deployments:
- Platform sets rules
- Build for hardware
- App Store controls distribution

Web Deployments:
- "Your" rules
- Build for browser
- "You" control distribution

Steps for release:
**Configure**
- Version & IDS. Android has 4 items, iOS has 2.
- Product plug: Use Trapeze to declare a config yaml file to update all items automatically upon running a `ci:configure` command to fire off said yaml.

**Build**

Build Types:

Android:
- Debug
- Release

iOS
- Simulator
- Development
- Ad-Hoc
- App Store
- Enterprise

_Code Signing_ is a security requirement to authenticate who created it & that it has not been altered

More things needed:

Android:
- Upload Key
- Keytool or generation through AndroidStudio

iOS:
- Signing certificate
- Provisioning profile
- Automatic  signing can be done in XCode
- Build for App Store needs Distribution Certificate 

Product plug, CI/CD in AppFlow can handle some of that stuff.

**Upload & Test**
Need accounts for Google Play Console & App Store Connect

**Release**
Store Approval & consider version support

# Ze end.