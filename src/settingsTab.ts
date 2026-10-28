import { App, PluginSettingTab, SettingDefinitionItem } from 'obsidian';
import type BreadcrumbsPlugin from '../main';
import { defaultSettings } from './settings';
import { t } from './i18n';

export class EBSettingTab extends PluginSettingTab {
  plugin: BreadcrumbsPlugin;

  constructor(app: App, plugin: BreadcrumbsPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  getSettingDefinitions(): SettingDefinitionItem[] {
    const i18n = t();

    return [
      {
        name: i18n.showFolderPath.name,
        desc: i18n.showFolderPath.desc,
        control: { type: 'toggle', key: 'showFolderPath' },
      },
      {
        name: i18n.showFileName.name,
        desc: i18n.showFileName.desc,
        control: { type: 'toggle', key: 'showFileName' },
      },
      {
        name: i18n.maxSegmentLength.name,
        desc: i18n.maxSegmentLength.desc,
        control: {
          type: 'number',
          key: 'maxSegmentLength',
          min: 1,
          step: 1,
          defaultValue: defaultSettings.maxSegmentLength,
          validate: value => (value >= 1 ? undefined : i18n.maxSegmentLength.errorMin),
        },
      },
      {
        name: i18n.editFollowView.name,
        desc: i18n.editFollowView.desc,
        control: { type: 'toggle', key: 'editFollowView' },
      },
      {
        name: i18n.editAnchorPercent.name,
        desc: i18n.editAnchorPercent.desc,
        control: {
          type: 'number',
          key: 'editAnchorPercent',
          min: 0,
          max: 100,
          step: 1,
          defaultValue: defaultSettings.editAnchorPercent,
          validate: value =>
            Number.isInteger(value) && value >= 0 && value <= 100 ? undefined : i18n.editAnchorPercent.errorRange,
        },
      },
      {
        name: i18n.readingAnchorPercent.name,
        desc: i18n.readingAnchorPercent.desc,
        control: {
          type: 'number',
          key: 'readingAnchorPercent',
          min: 0,
          max: 100,
          step: 1,
          defaultValue: defaultSettings.readingAnchorPercent,
          validate: value =>
            Number.isInteger(value) && value >= 0 && value <= 100 ? undefined : i18n.readingAnchorPercent.errorRange,
        },
      },
      {
        name: i18n.showInReadingMode.name,
        desc: i18n.showInReadingMode.desc,
        control: { type: 'toggle', key: 'showInReadingMode' },
      },
      {
        name: i18n.showInTabHeader.name,
        desc: i18n.showInTabHeader.desc,
        control: { type: 'toggle', key: 'showInTabHeader' },
      },
      {
        name: i18n.hideWhenNoHeadings.name,
        desc: i18n.hideWhenNoHeadings.desc,
        control: { type: 'toggle', key: 'hideWhenNoHeadings' },
      },
    ];
  }

  /** The base implementation persists to `plugin.settings`; refresh the bars on top of that. */
  override async setControlValue(key: string, value: unknown): Promise<void> {
    await super.setControlValue(key, value);
    this.plugin.renderAll();
  }
}
