# Password Generator

**Objective:** Create a password generator that can create a secure password.

It should be possible to generate a password by calling a method—you may choose
the method signature for this. The method should return a string containing the
new password.

This generation method should accept some options:

- `length` — (integer) length of the generated password
- `uppercase` — (boolean) include uppercase `A-Z` characters
- `lowercase` — (boolean) include lowercase `a-z` characters
- `number` — (integer) exact number of numeric `0-9` characters
- `special` — (integer) exact number of special `@%!?*^&` characters

The function should produce an error in the event of invalid options.

External libraries are allowed for testing purposes. The actual password
generation code however should be implemented in your code, and not simply call
out to an external library that does all the work.

The code should be packaged as a module which could be included into another
library or application.

Tests should be included to verify that the code works as intended.

Documentation should be included to demonstrate how to use this tool. A well
written README is more than sufficient.

Do make some notes about any difficulties or issues you encountered during the
development of this.

Push the library into a private repository on GitHub, and invite @adamcooke with
read access.
