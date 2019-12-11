import { IGlobalState } from "./global";
export default abstract class Scene {
    abstract onEnter(Global: IGlobalState): Promise<any>;
    abstract onExit(Global: IGlobalState): Promise<any>;
    abstract run(Global: any): Promise<any>;
}
