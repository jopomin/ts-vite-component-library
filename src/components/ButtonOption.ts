import type { OptionChangedEventInfo } from 'devextreme/core/dom_component'
import type { EventInfo, InitializedEventInfo } from 'devextreme/events'
import type dxButton from 'devextreme/ui/button'
import type { ClickEvent, Properties as IButtonOption } from 'devextreme/ui/button'

export default class ButtonOption implements IButtonOption {
  accessKey!: string | undefined
  activeStateEnabled!: boolean
  disabled!: boolean
  elementAttr!: object
  focusStateEnabled!: boolean
  height!: number | string | (() => string | number) | undefined
  hint!: string | undefined
  hoverStateEnabled!: boolean
  icon!: string
  onClick!: ((e: ClickEvent) => void) | undefined
  onContentReady!: ((e: EventInfo<dxButton>) => void) | undefined
  onDisposing!: ((e: EventInfo<dxButton>) => void) | undefined
  onInitialized!: ((e: InitializedEventInfo<dxButton>) => void) | undefined
  onOptionChanged!: ((e: OptionChangedEventInfo<dxButton>) => void) | undefined
  rtlEnabled!: boolean
  tabIndex!: number
  text: string
  useSubmitBehavior!: boolean
  validationGroup!: string | undefined
  visible!: boolean
  width!: number | string | (() => string | number) | undefined

  constructor(
    accessKey?: string | undefined,
    activeStateEnabled?: boolean,
    disabled?: boolean,
    elementAttr?: object,
    focusStateEnabled?: boolean,
    height?: number | string | (() => string | number) | undefined,
    hint?: string | undefined,
    hoverStateEnabled?: boolean,
    icon?: string,
    onClick?: ((e: ClickEvent) => void) | undefined,
    onContentReady?: ((e: EventInfo<dxButton>) => void),
    onDisposing?: ((e: EventInfo<dxButton>) => void),
    onInitialized?: ((e: InitializedEventInfo<dxButton>) => void),
    onOptionChanged?: ((e: OptionChangedEventInfo<dxButton>) => void),
    rtlEnabled?: boolean,
    tabIndex?: number,
    text?: string,
    useSubmitBehavior?: boolean,
    validationGroup?: string | undefined,
    visible?: boolean,
    width?: number | string | (() => string | number) | undefined,
  ) {
    this.accessKey = accessKey || undefined,
    this.activeStateEnabled = activeStateEnabled || true,
    this.disabled = disabled || false,
    this.elementAttr = elementAttr || {},
    this.focusStateEnabled = focusStateEnabled || true,
    this.height = height || undefined,
    this.hint = hint  || undefined,
    this.hoverStateEnabled = hoverStateEnabled || true,
    this.icon = icon || 'favorites',
    this.onClick = onClick || undefined,
    this.onContentReady = onContentReady || undefined,
    this.onDisposing = onDisposing || undefined,
    this.onInitialized = onInitialized || undefined,
    this.onOptionChanged = onOptionChanged || undefined,
    this.rtlEnabled = rtlEnabled || false,
    this.tabIndex = tabIndex || 0,
    this.text = text || 'CLICK',
    this.useSubmitBehavior = useSubmitBehavior || false,
    this.validationGroup = validationGroup || undefined,
    this.visible = visible || true,
    this.width = width || undefined
  }
}
