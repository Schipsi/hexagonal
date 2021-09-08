export interface CommandHandler<T> {
    handle(...args: any): T
}
