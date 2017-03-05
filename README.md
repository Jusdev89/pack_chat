# Packchat

### Application description:
#### It takes a village.

### Contributing

1. [Pick an Issue](https://github.com/Jusdev89/pack_chat/projects/1)
2. Fork the Repo
3. Clone that Fork
4. Finish the ticket
5. Rebase upstream master
5. Submit a pull request

### Getting Started

```
npm install
npm run start:dev
```

#### Homepage URL
```
http://localhost:7300/api/v1/home
```

#### Setting up Database
```
brew install postgresql
brew tap homebrew/services
brew services start postgresql
createdb packchat_development
createdb packchat_test
npm run migrate:latest
```

#### Make a Migration
```
npm run migrate:make [MIGRATE_NAME]
npm run migrate:latest
```

## Architecture

- Node
- Express
- Babel
- Postgres
- Knex
- Mocha/Chai


#### HTTP API
In Progress

### Contributors
[@Jusdev89](https://github.com/Jusdev89)
