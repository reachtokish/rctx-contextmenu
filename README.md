# rctx-contextmenu
Context menu for React

### `<ContextMenu />`
<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 60px;">Name</th>
    <th style="width: 50px;">Type</th>
    <th style="width: 10px;">Options</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>appendTo</td>
      <td>Element</td>
      <td>Should be a valid DOM element. <strong>Default: Enclosed element</strong></td>
      <td>Append context menu inside the passed element</td>
    </tr>
  </tbody>
</table>

### `<ContextMenuItem />`
<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 60px;">Name</th>
    <th style="width: 50px;">Type</th>
    <th style="width: 10px;">Options</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>onClick</td>
      <td>Function</td>
      <td>`() => {}`</td>
      <td>Fire onClick event</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>true / False . Default False</td>
      <td>Disable menu item.</td>
    </tr>
    <tr>
      <td>preventClose</td>
      <td>Boolean</td>
      <td>true / False . Default False</td>
      <td>Context menu is closed as soon as an item is clicked.</td>
    </tr>
    <tr>
      <td>attributes</td>
      <td>Object</td>
      <td>Rest props</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## `<ContextMenuTrigger />`

## `<SubMenu />`

hideOnLeave, onMouseLeave, preventHideOnResize, preventHideOnScroll, disableIfShiftIsPressed

ContextMenuTrigger - attributes, disable

onHide, onShow, preventHideOnContextMenu, className, programmatically hide show, animation - Not Done

ContextMenuTrigger - collect, holdToDisplay - Not Done