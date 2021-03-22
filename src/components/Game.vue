<template>
  <div>
    <div id="control">
      <div>
        {{Timer.viewString}}
        <button v-show="Timer.isEnuable" v-on:click="disassemble">スタート</button>
      </div>
    </div>
    <main id="main">
      <table class="gameView">
        <template v-for="(lines, y) in correctAnswer">
          <tr v-bind:key="createKey(y)">
            <template v-for="(_, x) in lines">
              <td
                class="panel"
                v-bind:style="GetcolorPalette(correctAnswer[y][x])"
                v-bind:key="createKey(x,y)"
                >&nbsp;</td>
            </template>
          </tr>
        </template>
      </table>
      <table class="gameView">
        <template v-for="(lines, y) in panels">
          <tr v-bind:key="createKey(y)">
            <template v-for="(_, x) in lines">
              <td
                class="panel"
                v-bind:style="GetcolorPalette(panels[y][x])"
                v-touch:swipe="move(x,y)"
                v-bind:key="createKey(x,y)"
              >&nbsp;</td>
            </template>
          </tr>
        </template>
      </table>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

class Timer {
  private _time: number = 0

  public get time(): number {
    return this._time
  }

  private _viewString: string = '0'

  public get viewString(): string {
    return this._viewString
  }

  private _timerId: number = -1

  public isEnuable: boolean = true

  public async Start(stopChecker: () => boolean): Promise<void> {
    this.isEnuable = false
    if (this._timerId !== -1) {
      clearInterval(this._timerId)
    }
    this._viewString = '3'
    await this.sleep(1000)
    this._viewString = '2'
    await this.sleep(1000)
    this._viewString = '1'
    await this.sleep(1000)
    this._viewString = 'start'
    this._timerId = setInterval(() => {
      this._viewString = this.time.toString()
      this._time += 1
      if (stopChecker()) {
        if (this._timerId !== -1) {
          clearInterval(this._timerId)
          this._viewString = this.time + '秒でClear'
          this.isEnuable = true
        }
      }
    }, 1000)
  }

  private sleep(milliseconds: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(() => resolve(), milliseconds)
    })
  }
}

class Style {
  public backgroundColor: string = ''

  public constructor(backgroundColor: string) {
    this.backgroundColor = backgroundColor
  }
}

@Component
export default class Game extends Vue {
  public panels: number[][] = [
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1],
    [2, 2, 2, 3, 3, 3],
    [2, 2, 2, 3, 3, 3],
    [2, 2, 2, 3, 3, 3],
  ]
  public correctAnswer: number[][] = new Array()

  public readonly colorPalette: string[] = ['red', 'blue', 'green', 'yellow']

  public constructor() {
    super()
    this.panels.forEach(x => this.correctAnswer.push(x.slice(0)))
  }

  public GetcolorPalette(n: number): object {
    return new Style(this.colorPalette[n])
  }

  public isClear(): boolean {
    return JSON.stringify(this.panels) === JSON.stringify(this.correctAnswer)
  }

  public move(x: number, y: number) {
    return (direction: string) => {
      switch (direction) {
        case 'top':
          this.moveTop(x)
          return
        case 'bottom':
          this.moveBottom(x)
          return
        case 'right':
          this.moveRight(y)
          return
        case 'left':
          this.moveLeft(y)
          return
        default:
          console.log(direction)
          return
      }
    }
  }

  public Timer: Timer = new Timer()

  public moveTop(column: number): void {
    if (0 <= column && column < this.getXSize()) {
      for (let index = 0; index < this.panels.length - 1; index++) {
        const tmp = this.panels[index][column]
        this.panels[index].splice(column, 1, this.panels[index + 1][column])
        this.panels[index + 1].splice(column, 1, tmp)
      }
    }
  }

  public moveBottom(column: number): void {
    if (0 <= column && column < this.getXSize()) {
      for (let index = this.panels.length - 1; 0 < index; index--) {
        const tmp = this.panels[index - 1][column]
        this.panels[index - 1].splice(column, 1, this.panels[index][column])
        this.panels[index].splice(column, 1, tmp)
      }
    }
  }

  public moveRight(row: number): void {
    if (0 <= row && row < this.getYSize()) {
      const panels = this.panels[row]
      for (let index = panels.length - 1; 0 < index; index--) {
        const tmp = panels[index - 1]
        panels.splice(index - 1, 1, panels[index])
        panels.splice(index, 1, tmp)
      }
    }
  }

  public moveLeft(row: number): void {
    if (0 <= row && row < this.getYSize()) {
      const panels = this.panels[row]
      for (let index = 0; index < panels.length - 1; index++) {
        const tmp = panels[index]
        panels.splice(index, 1, panels[index + 1])
        panels.splice(index + 1, 1, tmp)
      }
    }
  }

  public createKey(n1: number, n2: number = -1): string {
    if (n2 === -1) {
      return '#' + String(n1) + '#'
    }
    return String(n1) + '_' + String(n2)
  }

  public getXSize(): number {
    return this.panels[0].length
  }

  public getYSize(): number {
    return this.panels.length
  }

  private _rand(max: number): number {
    return Math.floor(Math.random() * Math.floor(max))
  }

  public async disassemble(): Promise<void> {
    await this.Timer.Start(this.isClear)
    const HowManyTimes = this.getXSize() + this.getYSize()
    this.moveRight(3)
    for (let index = 0; index < HowManyTimes; index++) {
      if (index % 2 === 0) {
        this.moveBottom(this._rand(this.getXSize()))
      } else {
        this.moveRight(this._rand(this.getYSize()))
      }
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 0px) {
  #control {
    display: flex;
    justify-content: center;
  }
  #main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .gameView {
    width: 400px;
    height: 400px;
    border-collapse: collapse;
    margin: 10px;
  }
  .panel {
    height: calc(100% / 6);
    width: calc(100% / 6);
    border: solid 1px black;
  }
}

@media screen and (max-width: 480px) {
  .gameView {
    width: 40vh;
    height: 40vh;
    border-collapse: collapse;
    margin: 10px;
  }
}
</style>
