import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export function fadeInAnimation() {
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  return trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [
      style({opacity: 0}),
      animate('.3s', style({opacity: 1}))
    ]),

    // transition(':leave', [
    //   style({opacity: 1}),
    //   animate('.1s', style({opacity: 0}))
    // ]),
  ]);
}

export function moveInLeftOutRight() {
  return trigger(
    'moveInLeftOutRight', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('.2s', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('.3s', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]
  )
}

export function moveInTopOutBottom() {
  return trigger(
    'moveInTopOutBottom', [
      transition(':enter', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('.2s', style({transform: 'translateY(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('.3s', style({transform: 'translateY(100%)', opacity: 0}))
      ])
    ]
  )
}

export function moveInTopOutTop() {
  return trigger(
    'moveInTopOutTop', [
      transition(':enter', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('.3s', style({transform: 'translateY(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('.3s', style({transform: 'translateY(-100%)', opacity: 0}))
      ])
    ]
  )
}

export function test() {
  return trigger('test', [
    transition(':enter', [
      query('button', style({transform: 'translateY(-100%)', opacity: 0})),
      query('button',
        stagger('.2s', [
          animate('.3s', style({transform: 'translateY(0)', opacity: 1}))
        ]))
    ]),
    transition(':leave', [
      query('button', style({transform: 'translateY(0)', opacity: 1})),
      query('button',
        stagger('.2s', [
          animate('.3s', style({transform: 'translateY(-100%)', opacity: 0}))
        ]))
    ])
  ]);
}
