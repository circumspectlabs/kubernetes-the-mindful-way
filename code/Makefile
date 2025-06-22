# https://makefiletutorial.com/
SHELL=/bin/bash

VERBOSE := 

MOLECULE := molecule

all: test

# Molecule
check converge dependency drivers init list matrix reset syntax verify cleanup create destroy idempotence prepare side-effect test:
	@$(MOLECULE) $(VERBOSE) $@

lint:
	@yamllint . --strict
	@ansible-lint . --strict

clean:
	@rm -rf ./.ansible || true

.PHONY: check converge dependency drivers init list matrix reset syntax verify cleanup create destroy idempotence lint login prepare side-effect test pytest clean
