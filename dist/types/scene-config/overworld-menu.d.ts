import Scene from "./scene";
export default class OverworldScene extends Scene {
    onEnter(): Promise<void>;
    onExit(): Promise<void>;
    run(): Promise<void>;
}
