import type { OnButtonClickDelegate } from '../actions/OnButtonClickDelegate'
import type { ShowOverlayDelegate } from '../actions/ShowOverlayDelegate'
import type { OnInitializedDelegate } from '../actions/OnInitializedDelegate'
import type { EmitAlertDelegate } from '../actions/EmitAlertDelegate'

export default class ButtonEditorOption {
  public onButtonClickAction!: OnButtonClickDelegate
  public showOverlayAction!: ShowOverlayDelegate
  public onInitializedAction!: OnInitializedDelegate
  public emitAlertAction!: EmitAlertDelegate
//   public accessKey: string | undefined = undefined
//   public activeStateEnabled: boolean = true
//   public disabled: boolean = false
//   public elementAttr: object = {}
//   public focusStateEnabled: boolean = true
//   public height: number | string | Function | undefined = undefined
//   public hint: string | undefined = undefined
//   public hoverStateEnabled: boolean = true
//   public icon: string = ''
//   public onClick: Function | null = null
//   public onContentReady: Function | null = null
//   public onDisposing: Function | null = null
//   public onInitialized: Function | null = null
//   public onOptionChanged: Function | null = null
//   public rtlEnabled: boolean = false
//   public stylingMode = 'contained'
//   public tabIndex: number = 0
//   public template = 'content'
//   public text: string = 'Click'
//   public type = 'normal'
//   public useSubmitBehavior: boolean = false
//   public validationGroup: string | undefined = undefined
//   public visible: boolean = true
//   public width: number | string | Function | undefined = undefined
}
