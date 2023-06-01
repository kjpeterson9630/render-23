# Thinking like an attacker: Protecting your Javascript Applications, Charlie Gerard

You know what I needed? More hosts riffing. :|

Charlie developer advocates at Stripe, but isn't a tiger, what the Flynn. 

Many cyber security attacks, every day. EVERY. DAY. 

Specifically focused around improving security around nodeJS modules. Time to engage in educational cybercrimes! 

## Protestware
It's an attack to raise awareness? Basically, it's raising something to users without any adverse longterm effect...usually.

## Ransomware
Classic. Encrypt your device, so you can't get stuff without payment. (small talk about how encryption works) One way to trick users into running, postinstall in a package.json in a node library. Pointing out that you can have a script in your repo that then gets a remote script that then executes to make it even harder to determine what will happen. 

## Reverse Shell
Basically opening your computer to remote access? Basically can use "netcat" or nc to forward your shell to a remote IP, wild. 
Failed live demo, poor Charlie. 

## Hiding Malware
- Code Obfuscation: Basically just using weird ways to hide what it's actually doing, like using unicode escape characters.
- Corrupt "resolved" URLs in package-lock.json
- Bin script confusion
- VSCode extensions

Use chatGPT to create believable, but ultimately fake NPM packages, wow.

- Snyk/Socket are security tools you could use
- Integrate manual security checks to your workflow (Thanks, security pipeline templates!)
- Don't install packages you don't need (Re-invent the right wheels)
- Regularly update your dependencies, but not TOO regularly. I dunno, fly casual
- Be careful of typosquatting, you never know when a typo will install malware.
- Have Blair punch badguys in the FACE

Bleeping Computer
PortSwigger
Snyk Vulnerability DB
