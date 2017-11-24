import { el, mount } from '../../lib/redom.es.min.js';
import { Store } from '../data/store.js';
import { CreateNewWorld } from '../actions/create-new-world.js';
import { DeleteWorld } from '../actions/delete-world.js';
import { NextTurn } from '../actions/next-turn.js';
import { SetPlayerAction } from '../actions/set-player-action.js';

export class AppComponent {
  constructor() {
    this.el = el('div.container', [
      el('h1', 'Ugly Text and Round based RPG'),
      el('hr'),
      el('input.action-input', {
        onkeydown: this.handleAction.bind(this),
        autofocus: true,
        spellcheck: false
      }),
      el('button', {
        type: 'button',
        onclick: () => this.update
      }, 'update'),
      el('hr'),
      el('h4', 'actionlog'),
      this.actionLog = el('pre'),
      el('h4', 'world'),
      this.world = el('pre'),
      el('h4', 'objects'),
      this.objects = el('pre'),
      el('h4', 'fields'),
      this.fields = el('pre'),
      el('h4', 'logs'),
      this.logs = el('pre'),
    ]);
  }
  async update(data) {
    this.actionLog.textContent = JSON.stringify(data, null, 2)
    this.world.textContent = JSON.stringify(await Store.world.all(), null, 2);
    this.objects.textContent = JSON.stringify(await Store.objects.all(), null, 2);
    this.fields.textContent = JSON.stringify(await Store.fields.all(), null, 2);
    this.logs.textContent = JSON.stringify(await Store.logs.all(), null, 2);
  }

  async handleAction(event) {
    if (event.keyCode !== 13) {
      return;
    }
    const raw = event.target.value;
    const params = event.target.value.split(',');
    const action = _.first(params).toLowerCase();
    params.splice(0, 1);
    event.target.value = '';
    switch (action) {
      case 'createnewworld':
        {
          await CreateNewWorld(...params)
        }
        break;
      case 'deleteworld':
        {
          await DeleteWorld(...params)
        }
        break;
      case 'nextturn':
        {
          await NextTurn(...params)
        }
        break;
      case 'setplayeraction':
        {
          try {
            const playerAction = JSON.parse(raw.substr('setplayeraction,'.length));
            await SetPlayerAction(playerAction);
          } catch (e) {
            console.error('cant parse', raw);
          }

        }
        break;
      default:
        {

        }
    }
    this.update({
      action,
      params
    });
  }
}