import { SceneStack } from "./src/scene-config/scene-stack";

async function game() {
  while (SceneStack.length > 0) {
    const scene = SceneStack[0];

    await scene.run();
    await scene.onExit();
    await SceneStack.shift();
  }
}

game();
