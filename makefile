commit:
	bun run build && git add . && aicommit2

local-deploy:
	bun run predeploy && bun run deploy

gen-type:
	supabase gen types typescript --project-id vnwhpdtysmzijozfxzjb > database.types.ts