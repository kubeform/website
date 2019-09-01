.PHONY: run
run:
	hugo server

.PHONY: docs
docs:
	hugo-tools docs-aggregator

.PHONY: gen
gen:
	rm -rf public
	hugo --minify

.PHONY: deploy
deploy: gen
	firebase deploy
