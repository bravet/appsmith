import entityReducer from "@appsmith/reducers/entityReducers";
import uiReducer from "@appsmith/reducers/uiReducers";
import evaluationsReducer from "reducers/evaluationReducers";
import { reducer as formReducer } from "redux-form";
import type { CanvasWidgetsReduxState } from "reducers/entityReducers/canvasWidgetsReducer";
import type { EditorReduxState } from "@appsmith/reducers/uiReducers/editorReducer";
import type { ErrorReduxState } from "reducers/uiReducers/errorReducer";
import type { ActionDataState } from "@appsmith/reducers/entityReducers/actionsReducer";
import type { PropertyPaneReduxState } from "reducers/uiReducers/propertyPaneReducer";
import type { TemplatesReduxState } from "reducers/uiReducers/templateReducer";
import type { DatasourceDataState } from "reducers/entityReducers/datasourceReducer";
import type { AppViewReduxState } from "reducers/uiReducers/appViewReducer";
import type { DatasourcePaneReduxState } from "reducers/uiReducers/datasourcePaneReducer";
import type { ApplicationsReduxState } from "@appsmith/reducers/uiReducers/applicationsReducer";
import type { PageListReduxState } from "reducers/entityReducers/pageListReducer";
import type { ApiPaneReduxState } from "@appsmith/reducers/uiReducers/apiPaneReducer";
import type { QueryPaneReduxState } from "@appsmith/reducers/uiReducers/queryPaneReducer";
import type { PluginDataState } from "reducers/entityReducers/pluginsReducer";
import type { AuthState } from "reducers/uiReducers/authReducer";
import type { WorkspaceReduxState } from "@appsmith/reducers/uiReducers/workspaceReducer";
import type { UsersReduxState } from "reducers/uiReducers/usersReducer";
import type { ThemeState } from "reducers/uiReducers/themeReducer";
import type { WidgetDragResizeState } from "reducers/uiReducers/dragResizeReducer";
import type { MetaState } from "reducers/entityReducers/metaReducer";
import type { ImportReduxState } from "reducers/uiReducers/importReducer";
import type { HelpReduxState } from "reducers/uiReducers/helpReducer";
import type { ApiNameReduxState } from "@appsmith/reducers/uiReducers/apiNameReducer";
import type { ExplorerReduxState } from "@appsmith/reducers/uiReducers/explorerReducer";
import type { PageCanvasStructureReduxState } from "reducers/uiReducers/pageCanvasStructureReducer";
import type { ModalActionReduxState } from "reducers/uiReducers/modalActionReducer";
import type { AppDataState } from "reducers/entityReducers/appReducer";
import type { DatasourceNameReduxState } from "reducers/uiReducers/datasourceNameReducer";
import type { EvaluatedTreeState } from "reducers/evaluationReducers/treeReducer";
import type { EvaluationDependencyState } from "reducers/evaluationReducers/dependencyReducer";
import type { PageWidgetsReduxState } from "reducers/uiReducers/pageWidgetsReducer";
import type { OnboardingState } from "reducers/uiReducers/onBoardingReducer";
import type { GlobalSearchReduxState } from "reducers/uiReducers/globalSearchReducer";
import type { ActionSelectorReduxState } from "reducers/uiReducers/actionSelectorReducer";
import type { ReleasesState } from "reducers/uiReducers/releasesReducer";
import type { LoadingEntitiesState } from "reducers/evaluationReducers/loadingEntitiesReducer";
import type { WebsocketReducerState } from "reducers/uiReducers/websocketReducer";
import type { DebuggerReduxState } from "reducers/uiReducers/debuggerReducer";
import type { TourReducerState } from "reducers/uiReducers/tourReducer";
import type { TableFilterPaneReduxState } from "reducers/uiReducers/tableFilterPaneReducer";
import type { JsPaneReduxState } from "reducers/uiReducers/jsPaneReducer";
import type { JSCollectionDataState } from "@appsmith/reducers/entityReducers/jsActionsReducer";
import type { CanvasSelectionState } from "reducers/uiReducers/canvasSelectionReducer";
import type { JSObjectNameReduxState } from "reducers/uiReducers/jsObjectNameReducer";
import type { GitSyncReducerState } from "reducers/uiReducers/gitSyncReducer";
import type { AppCollabReducerState } from "reducers/uiReducers/appCollabReducer";
import type { CrudInfoModalReduxState } from "reducers/uiReducers/crudInfoModalReducer";
import type { FormEvaluationState } from "reducers/evaluationReducers/formEvaluationReducer";
import type { widgetReflow } from "reducers/uiReducers/reflowReducer";
import type { AppThemingState } from "reducers/uiReducers/appThemingReducer";
import type { MainCanvasReduxState } from "reducers/uiReducers/mainCanvasReducer";
import type { SettingsReduxState } from "@appsmith/reducers/settingsReducer";
import SettingsReducer from "@appsmith/reducers/settingsReducer";
import type { TriggerValuesEvaluationState } from "reducers/evaluationReducers/triggerReducer";
import type { CanvasWidgetStructure } from "WidgetProvider/constants";
import type { AppSettingsPaneReduxState } from "reducers/uiReducers/appSettingsPaneReducer";
import type { TenantReduxState } from "@appsmith/reducers/tenantReducer";
import tenantReducer from "@appsmith/reducers/tenantReducer";
import type { FocusHistoryState } from "reducers/uiReducers/focusHistoryReducer";
import type { EditorContextState } from "@appsmith/reducers/uiReducers/editorContextReducer";
import type { LibraryState } from "reducers/uiReducers/libraryReducer";
import type { AutoHeightLayoutTreeReduxState } from "reducers/entityReducers/autoHeightReducers/autoHeightLayoutTreeReducer";
import type { CanvasLevelsReduxState } from "reducers/entityReducers/autoHeightReducers/canvasLevelsReducer";
import type { LintErrorsStore } from "reducers/lintingReducers/lintErrorsReducers";
import lintErrorReducer from "reducers/lintingReducers";
import type { AutoHeightUIState } from "reducers/uiReducers/autoHeightReducer";
import type { AnalyticsReduxState } from "reducers/uiReducers/analyticsReducer";
import type { MetaWidgetsReduxState } from "reducers/entityReducers/metaWidgetsReducer";
import type { layoutConversionReduxState } from "reducers/uiReducers/layoutConversionReducer";
import type { OneClickBindingState } from "reducers/uiReducers/oneClickBindingReducer";
import type { IDEState } from "reducers/uiReducers/ideReducer";

/* Reducers which are integrated into the core system when registering a pluggable module
    or done so by a module that is designed to be eventually pluggable */
import type { LayoutElementPositionsReduxState } from "layoutSystems/anvil/integrations/reducers/layoutElementPositionsReducer";
import type { ActiveField } from "reducers/uiReducers/activeFieldEditorReducer";
import type { SelectedWorkspaceReduxState } from "@appsmith/reducers/uiReducers/selectedWorkspaceReducer";
import type { ConsolidatedPageLoadState } from "reducers/uiReducers/consolidatedPageLoadReducer";
import type { BuildingBlocksReduxState } from "reducers/uiReducers/buildingBlockReducer";

export const reducerObject = {
  entities: entityReducer,
  ui: uiReducer,
  evaluations: evaluationsReducer,
  form: formReducer,
  settings: SettingsReducer,
  tenant: tenantReducer,
  linting: lintErrorReducer,
};

export interface AppState {
  ui: {
    consolidatedPageLoad: ConsolidatedPageLoadState;
    analytics: AnalyticsReduxState;
    editor: EditorReduxState;
    propertyPane: PropertyPaneReduxState;
    tableFilterPane: TableFilterPaneReduxState;
    errors: ErrorReduxState;
    appView: AppViewReduxState;
    applications: ApplicationsReduxState;
    apiPane: ApiPaneReduxState;
    auth: AuthState;
    templates: TemplatesReduxState;
    buildingBlocks: BuildingBlocksReduxState;
    workspaces: WorkspaceReduxState;
    selectedWorkspace: SelectedWorkspaceReduxState;
    users: UsersReduxState;
    widgetDragResize: WidgetDragResizeState;
    imports: ImportReduxState;
    queryPane: QueryPaneReduxState;
    datasourcePane: DatasourcePaneReduxState;
    help: HelpReduxState;
    apiName: ApiNameReduxState;
    explorer: ExplorerReduxState;
    pageCanvasStructure: PageCanvasStructureReduxState;
    pageWidgets: PageWidgetsReduxState;
    modalAction: ModalActionReduxState;
    datasourceName: DatasourceNameReduxState;
    theme: ThemeState;
    onBoarding: OnboardingState;
    globalSearch: GlobalSearchReduxState;
    releases: ReleasesState;
    websocket: WebsocketReducerState;
    debugger: DebuggerReduxState;
    tour: TourReducerState;
    jsPane: JsPaneReduxState;
    canvasSelection: CanvasSelectionState;
    jsObjectName: JSObjectNameReduxState;
    gitSync: GitSyncReducerState;
    appCollab: AppCollabReducerState;
    crudInfoModal: CrudInfoModalReduxState;
    widgetReflow: widgetReflow;
    appTheming: AppThemingState;
    mainCanvas: MainCanvasReduxState;
    appSettingsPane: AppSettingsPaneReduxState;
    focusHistory: FocusHistoryState;
    editorContext: EditorContextState;
    libraries: LibraryState;
    autoHeightUI: AutoHeightUIState;
    layoutConversion: layoutConversionReduxState;
    actionSelector: ActionSelectorReduxState;
    oneClickBinding: OneClickBindingState;
    activeField: ActiveField;
    ide: IDEState;
  };
  entities: {
    canvasWidgetsStructure: CanvasWidgetStructure;
    canvasWidgets: CanvasWidgetsReduxState;
    metaWidgets: MetaWidgetsReduxState;
    actions: ActionDataState;
    datasources: DatasourceDataState;
    pageList: PageListReduxState;
    plugins: PluginDataState;
    meta: MetaState;
    app: AppDataState;
    jsActions: JSCollectionDataState;
    autoHeightLayoutTree: AutoHeightLayoutTreeReduxState;
    canvasLevels: CanvasLevelsReduxState;
    layoutElementPositions: LayoutElementPositionsReduxState;
    // TODO: Fix this the next time the file is edited
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    moduleInstanceEntities: any;
  };
  evaluations: {
    tree: EvaluatedTreeState;
    dependencies: EvaluationDependencyState;
    loadingEntities: LoadingEntitiesState;
    formEvaluation: FormEvaluationState;
    triggers: TriggerValuesEvaluationState;
  };
  linting: {
    errors: LintErrorsStore;
  };
  form: {
    // TODO: Fix this the next time the file is edited
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  settings: SettingsReduxState;
  // TODO: Fix this the next time the file is edited
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tenant: TenantReduxState<any>;
}
