.PHONY: run
run:
	hugo server --config=config.dev.yaml

.PHONY: docs
docs:
	hugo-tools docs-aggregator
	find ./data -name "*.json" -exec sed -i 's/https:\/\/cdn.appscode.com\/images/\/assets\/images/g' {} \;

.PHONY: assets
assets:
	hugo-tools docs-aggregator --only-assets
	find ./data -name "*.json" -exec sed -i 's/https:\/\/cdn.appscode.com\/images/\/assets\/images/g' {} \;

.PHONY: gen
gen:
	rm -rf public
	hugo --config=config.dev.yaml

.PHONY: qa
qa: gen
	firebase use default
	firebase deploy

.PHONY: gen-prod
gen-prod:
	rm -rf public
	hugo --minify --config=config.yaml

.PHONY: release
release: gen-prod
	firebase use prod
	firebase deploy
	firebase use default

.PHONY: check-links
check-links:
	liche -r public -d http://localhost:1313 -c 10 -p -l -x '^http://localhost:9090$$'
