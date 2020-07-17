export type NodeEnv = 'production' | 'development' | 'test';

export function setNodeEnv(value: NodeEnv): void {
    process.env.NODE_ENV = value;
}
