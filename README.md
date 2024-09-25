# Sad path

- [install overmind](https://github.com/DarthSim/overmind?tab=readme-ov-file#installation) if it's not installed
- `npm run seed:kv` to seed KV with sample data
- `overmind start` to start both Vite apps
- navigate to `http://localhost:3000` and `http://localhost:3001` to see the apps
  - KV data is not loaded correctly and will display `failed to load KV data`
  - a .wrangler folder is created at the root of the repository though seeding the data creates a .wrangler folder
  in the same directory as the wrangler.toml file (1 for both worker1/ and worker2/)

# Happy path

- cd into either worker1/ or worker2
- run `remix vite:dev` to start the dev server
- navigate to `http://localhost:3000` or `http://localhost:3001` to see the apps
  - KV data is loaded correctly
