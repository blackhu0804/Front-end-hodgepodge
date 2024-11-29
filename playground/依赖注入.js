class Logger {
    log(message) {
        console.log(message)
    }
}

class UserService {
    constructor(logger) {
        this.logger = logger;
    }

    getUser() {
        this.logger.log('get User');
        return { name: 'Black' }
    }
}

const logger = new Logger();

const userService = new UserService(logger);

const user = userService.getUser();
console.log(user);