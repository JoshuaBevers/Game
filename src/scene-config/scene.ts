export default abstract class Scene {
  abstract onEnter(): Promise<any>;
  abstract onExit(): Promise<any>;
  abstract run(): Promise<any>;
}
