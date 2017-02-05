  <h1>Responsive Move</h1>
  <div class="aside-move--top" data-js-responsive-move="aside-move"></div>
  <div class="js-responsive-move aside-move--right" data-js-responsive-move="aside-move" data-js-responsive-move-breakpoint="549">
    <aside>
      <h3>Summary</h3>
      <p>Moves content from .js-responsive-move to its associated data-js-responsive-move</p>
    </aside>
  </div>
  <h3>Usage</h3>
  <ul>
    <li><strong>.js-responsive-move</strong>: the container of the original content to move</li>
    <li><strong>[data-js-responsive-move=MOVE_ID]</strong>:The unique data attribute added to the .js-responsive-move element AND an empty target element</li>
  </ul>
  <h3>Optional</h3>
  <ul>
    <li><strong>[data-js-responsive-move-breakpoint=NUMBER]</strong>: The max-breakpoint in pixels. Default is 767.</li>
  </ul>
  <h3>Creates</h3>
  <ul>
    <li><strong>.is-active</strong>: Added to the [data-js-responsive-move] which is currently active</li>
    <li><strong>.is-inactive</strong>: Added to the [data-js-responsive-move] which is currently inactive</li>
  </ul>