import * as THREE from "three"; // three라는 폴더에서 THREE를 연동시킨다.
import Experience from "../Experience";
export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
  }
  resize() {}
  update() {}
}
