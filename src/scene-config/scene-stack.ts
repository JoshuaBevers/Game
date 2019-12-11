import Scene from "./scene";
import OverworldScene from "./overworld-menu";
import Prologue from "../prologue/stage1";

export const SceneStack: Scene[] = [new Prologue(), new OverworldScene()];
