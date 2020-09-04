import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'MixinResize'
})
export default class extends Vue {
  mounted() {
    this.dragControllerDiv();
  }
  private dragControllerDiv() {
    const box: HTMLElement = document.querySelector(".box") as HTMLElement;
    const left: HTMLElement = document.querySelector(".left") as HTMLElement;
    const resize1: HTMLElement = document.querySelector(".y-hander") as HTMLElement;
    const middle: HTMLElement = document.querySelector(".right") as HTMLElement;
    // 左边拖拽区域添加mousedown事件
    resize1.onmousedown = function (e) {
      const initWindowWidth = box.clientWidth;
      const initLeftWidth = left.clientWidth;
      const initResize1Width = resize1.clientWidth;
      const initMiddleWidth = middle.clientWidth;
      const mouseStartDistanceToWindowLeft = e.clientX;
      // 左边拖拽区域添加mousemove事件，并不断计算各区域宽度
      document.onmousemove = function (e) {
        const mouseFinalDistanceToWindowLeft = e.clientX;
        // 获取鼠标移动的距离
        const mouseMovedDistance = mouseFinalDistanceToWindowLeft - mouseStartDistanceToWindowLeft;
        // 各种计算距离和宽度
        const leftWidth = initLeftWidth + mouseMovedDistance;
        const rightWidth = initWindowWidth - initLeftWidth - initResize1Width - mouseMovedDistance;
        if (leftWidth > 100 && rightWidth > 150) {
          resize1.style.left = leftWidth + "px";
          left.style.width = leftWidth + "px";
          middle.style.left = initMiddleWidth + mouseMovedDistance + initResize1Width + "px";
          middle.style.width = rightWidth + "px";
        }
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    };
  }
}