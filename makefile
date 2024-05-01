commit:
	git add . && aicommit2

local-deploy:
	bun run predeploy && bun run deploy