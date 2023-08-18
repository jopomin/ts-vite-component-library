// import responsive box
import ResponsiveBox, {
  type Properties as ResponsiveBoxOptions
} from 'devextreme/ui/responsive_box'

import Button, { type Properties as ButtonOption } from 'devextreme/ui/button'
import type ButtonEditorOption from './ButtonEditorOption'

export default class ButtonEditor {
  // component istances
  public responsiveBox: ResponsiveBox
  public button: Button

  // options
  public options: ButtonEditorOption

  constructor(
    responsiveBox: ResponsiveBox,
    button: Button,
    options: ButtonEditorOption,
    buttonOptions: ButtonOption
  ) {
    this.responsiveBox = responsiveBox
    this.button = button
    this.options = options
    this.buttonOptions = buttonOptions

    this.initRespBox()

    if (this.button && this.buttonOptions) {
      this.initButton(this.button, this.buttonOptions)
    }
  }

  // #region ResponsiveBox

  initRespBox() {
    this.responsiveBox.beginUpdate()

    // initialize options
    const ops = {
      rows: [{ ratio: 1 }],
      cols: [{ ratio: 1 }]
    } as ResponsiveBoxOptions

    // assign options
    this.responsiveBox.option(ops)

    this.responsiveBox.endUpdate()
  }

  // #endregion ResponsiveBox

  // #region Button
  public buttonOptions: ButtonOption

  initButton(button: Button, buttonOptions: ButtonOption) {
    button.beginUpdate()

    // const onButtonClick = this.options.onButtonClickAction
    // const showOverlay = this.options.showOverlayAction
    // const onInitializedAction = this.options.onInitializedAction

    // const ops = {
    //   visible: true,
    //   disabled: false,
    //   hint: 'This is a test button',
    //   text: 'PROVA',
    //   width: 100,
    //   height: 50,
    //   diagonale: 5,
    //   onClick: this.onOptionChangedAction,
    //   onInitialized: onInitializedAction,
    //   onOptionChanged: this.onOptionChangedAction
    // }

    // // assign options
    button.option(buttonOptions)
    // button.option()
    button.endUpdate()
  }

  // #endregion Button

  onOptionChangedAction = () => {
    console.log(this.button.option())
  }
}
