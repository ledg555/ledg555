const TRANSITIONS = {
    toggleable: {
        timeout: 500,
        classNames: {
          enter: 'max-h-0',
          enterActive:
            '!max-h-[1000px] overflow-hidden transition-[max-height] duration-500 ease-in',
          exit: 'max-h-[1000px]',
          exitActive:
            '!max-h-0 overflow-hidden transition-[max-height] duration-500 ease-out',
        }
    }
};

export const customPT: PrimeReactPTOptions = {
  speeddial: {
        root: 'absolute flex',
        button: {
            root: ({ state }) => ({
                className: classNames('w-16 !h-16 !rounded-full justify-center z-10', {
                    'rotate-45': state.visible
                })
            }),
            label: {
                className: 'hidden'
            }
        },
        menu: 'm-0 p-0 list-none flex items-center justify-center transition delay-200 z-20',
        menuitem: ({ props, state }) => ({
            className: classNames(
                'transform transition-transform duration-200 ease-out transition-opacity duration-800',
                !state.visible ? 'opacity-0 scale-0' : 'opacity-1 scale-100',
                {
                    'my-1 first:mb-2': props.direction == 'up' && props.type == 'linear',
                    'my-1 first:mt-2': props.direction == 'down' && props.type == 'linear',
                    'mx-1 first:mr-2': props.direction == 'left' && props.type == 'linear',
                    'mx-1 first:ml-2': props.direction == 'right' && props.type == 'linear'
                },
                { absolute: props.type !== 'linear' }
            )
        }),
        action: {
            className: classNames('flex items-center justify-center rounded-full relative overflow-hidden', 'w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white')
        },
        mask: ({ state }) => ({
            className: classNames('absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0', {
                'opacity-0': !state.visible,
                'pointer-events-none opacity-100 transition-opacity duration-400 ease-in-out': state.visible
            })
        })
    },
  accordion: {
        root: 'mb-1',
        accordiontab: {
            root: 'mb-1',
            header: ({ props }) => ({
                className: classNames(
                    { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled } // Condition
                )
            }),
            headerAction: ({ context }) => ({
                className: classNames(
                    'flex items-center cursor-pointer relative no-underline select-none', // Alignments
                    'p-5 transition duration-200 ease-in-out rounded-t-md font-bold transition-shadow duration-200', // Padding and transition
                    'border border-gray-300 bg-gray-100 text-gray-600', // Borders and colors
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Dark mode
                    'hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800', // Hover
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    { 'rounded-br-md rounded-bl-md': !context.selected, 'rounded-br-0 rounded-bl-0 text-gray-800': context.selected } // Condition
                )
            }),
            headerIcon: 'inline-block mr-2',
            headerTitle: 'leading-none',
            content: {
                className: classNames(
                    'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
                )
            },
            transition: TRANSITIONS.toggleable
        }
    },
  button: {
        root: ({ props, context }) => ({
            className: classNames(
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom',
                'transition duration-200 ease-in-out',
                'focus:outline-none focus:outline-offset-0',
                {
                    'text-white dark:text-gray-900 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:border-blue-600 dark:hover:border-blue-500 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.link
                },
                {
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(176,185,198,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(203,213,225,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'secondary',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(136,234,172,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(134,239,172,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'success',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'info',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(250,207,133,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,211,77,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'warning',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(212,170,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(216,180,254,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'help',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,165,165,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'danger'
                },
                {
                    'text-white dark:text-gray-900 bg-gray-500 dark:bg-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:border-gray-600 dark:hover:border-gray-500':
                        props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500':
                        props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 dark:bg-blue-400 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500':
                        props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-orange-500 dark:bg-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:border-orange-600 dark:hover:border-orange-500':
                        props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-purple-500 dark:bg-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:border-purple-600 dark:hover:border-purple-500':
                        props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500':
                        props.severity === 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 dark:text-blue-400 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 dark:text-gray-400 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                    'text-green-500 dark:text-green-400 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                    'text-orange-500 dark:text-orange-400 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                    'text-purple-500 dark:text-purple-400 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                    'text-red-500 dark:text-red-400 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain && props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain && props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain && !props.outlined && !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 dark:text-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                    'text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                    'text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                    'text-purple-500 dark:text-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                    'text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
                { 'flex-column': props.iconPos == 'top' || props.iconPos == 'bottom' },
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            )
        }),
        label: ({ props }) => ({
            className: classNames(
                'flex-1',
                'duration-200',
                'font-bold',
                {
                    'hover:underline': props.link
                },
                { 'invisible w-0': props.label == null }
            )
        }),
        icon: ({ props }) => ({
            className: classNames('mx-0', {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                'mb-2': props.iconPos == 'top' && props.label != null,
                'mt-2 order-2': props.iconPos == 'bottom' && props.label != null
            })
        }),
        loadingIcon: ({ props }) => ({
            className: classNames('mx-0', {
                'mr-2': props.loading && props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.loading && props.iconPos == 'right' && props.label != null,
                'mb-2': props.loading && props.iconPos == 'top' && props.label != null,
                'mt-2 order-2': props.loading && props.iconPos == 'bottom' && props.label != null
            })
        }),
        badge: ({ props }) => ({
            className: classNames({ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge })
        })
    },
  sidebar: {
        root: ({ props }) => ({
            className: classNames(
                'flex flex-col pointer-events-auto relative transform translate-x-0 translate-y-0 translate-z-0 relative transition-transform duration-300',
                'bg-white text-gray-700 border-0 shadow-lg',
                {
                    '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.position == 'full',
                    'h-full w-80': props.position == 'left' || props.position == 'right',
                    'h-40 w-full': props.position == 'top' || props.position == 'bottom'
                },
                'dark:border dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80'
            )
        }),
        header: {
            className: classNames('flex items-center justify-end', 'p-5')
        },
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: {
            className: classNames('p-5 pt-0 h-full w-full', 'grow overflow-y-auto')
        },
        mask: {
            className: classNames('flex pointer-events-auto', 'bg-black bg-opacity-40 transition duration-200 z-20 transition-colors')
        },
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left'
                ? {
                      enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: '-translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right'
                ? {
                      enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0',
                      enterActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveToClass: 'opacity-0'
                  };
        }
    },
  selectbutton: {
        root: ({ props }) => ({
            className: classNames({ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled })
        }),
        button: ({ context }) => ({
            className: classNames(
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3',
                'transition duration-200 border border-r-0',
                'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-gray-300 dark:border-blue-900/40 hover:bg-gray-50 dark:hover:bg-gray-800/80 ': !context.selected,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600': context.selected,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                }
            )
        }),
        label: 'font-bold'
    },
    sidebar: {
        root: ({ props }) => ({
            className: classNames(
                'flex flex-col pointer-events-auto relative transform translate-x-0 translate-y-0 translate-z-0 relative transition-transform duration-300',
                'bg-white text-gray-700 border-0 shadow-lg',
                {
                    '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.position == 'full',
                    'h-full w-80': props.position == 'left' || props.position == 'right',
                    'h-40 w-full': props.position == 'top' || props.position == 'bottom'
                },
                'dark:border dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80'
            )
        }),
        header: {
            className: classNames('flex items-center justify-end', 'p-5')
        },
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: {
            className: classNames('p-5 pt-0 h-full w-full', 'grow overflow-y-auto')
        },
        mask: {
            className: classNames('flex pointer-events-auto', 'bg-black bg-opacity-40 transition duration-200 z-20 transition-colors')
        },
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left'
                ? {
                      enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: '-translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right'
                ? {
                      enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0',
                      enterActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveToClass: 'opacity-0'
                  };
        }
    },
  image: {
        root: 'relative inline-block',
        button: {
            className: classNames(
                'absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300',
                'bg-transparent text-gray-100',
                'hover:opacity-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-50' //Hover
            )
        },
        mask: {
            className: classNames('fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90')
        },
        toolbar: {
            className: classNames('absolute top-0 right-0 z-10 flex', 'p-4')
        },
        rotaterightbutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        rotaterighticon: 'w-6 h-6',
        rotateleftbutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        rotatelefticon: 'w-6 h-6',
        zoomoutbutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        zoomouticon: 'w-6 h-6',
        zoominbutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        zoominicon: 'w-6 h-6',
        closebutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        closeicon: 'w-6 h-6',
        transition: {
            enterFromClass: 'opacity-0 scale-75',
            enterActiveClass: 'transition-all duration-150 ease-in-out',
            leaveActiveClass: 'transition-all duration-150 ease-in',
            leaveToClass: 'opacity-0 scale-75'
        }
    },
  galleria: {
        root: 'flex flex-col',
        content: 'flex flex-col',
        itemwrapper: 'flex flex-col relative',
        itemcontainer: 'relative flex h-full',
        item: 'flex justify-center items-center h-full w-full',
        thumbnailwrapper: 'flex flex-col overflow-auto shrink-0',
        thumbnailcontainer: {
            className: classNames('flex flex-row', 'bg-black/90 p-4')
        },
        previousthumbnailbutton: {
            className: classNames(
                'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
                'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        thumbnailitemscontainer: 'overflow-hidden w-full',
        thumbnailitems: 'flex',
        thumbnailitem: {
            className: classNames('overflow-auto flex items-center justify-center cursor-pointer opacity-50', 'flex-1 grow-0 shrink-0 w-20', 'hover:opacity-100 hover:transition-opacity hover:duration-300')
        },
        nextthumbnailbutton: {
            className: classNames(
                'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
                'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        indicators: {
            className: classNames('flex items-center justify-center', 'p-4')
        },
        indicator: 'mr-2',
        indicatorbutton: ({ context }) => ({
            className: classNames('w-4 h-4 transition duration-200 rounded-full', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
                'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.highlighted,
                'bg-blue-500 hover:bg-blue-600': context.highlighted
            })
        }),
        mask: {
            className: classNames('fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90')
        },
        closebutton: {
            className: classNames(
                'absolute top-0 right-0 flex justify-center items-center overflow-hidden m-2',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        closeicon: 'w-6 h-6',
        previousitembutton: {
            className: classNames(
                'inline-flex justify-center items-center overflow-hidden',
                'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
                'fixed top-1/2 mt-[-0.5rem]',
                'left-0',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        nextitembutton: {
            className: classNames(
                'inline-flex justify-center items-center overflow-hidden',
                'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
                'fixed top-1/2 mt-[-0.5rem]',
                'right-0',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        caption: {
            className: classNames('absolute bottom-0 left-0 w-full', 'bg-black/50 text-white p-4')
        },
        transition: {
            enterFromClass: 'opacity-0 scale-75',
            enterActiveClass: 'transition-all duration-150 ease-in-out',
            leaveActiveClass: 'transition-all duration-150 ease-in',
            leaveToClass: 'opacity-0 scale-75'
        }
    },
  dialog: {
        root: ({ state }) => ({
            className: classNames('rounded-lg shadow-lg border-0', 'max-h-[90%] transform scale-100', 'm-0 w-[50vw]', 'dark:border dark:border-blue-900/40', {
                'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
            })
        }),
        header: {
            className: classNames('flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80')
        },
        headerTitle: 'font-bold text-lg',
        headerIcons: 'flex items-center',
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: ({ state }) => ({
            className: classNames('overflow-y-auto', 'bg-white text-gray-700 px-6 pb-8 pt-0', 'rounded-bl-lg rounded-br-lg', 'dark:bg-gray-900  dark:text-white/80 ', {
                grow: state.maximized
            })
        }),
        footer: {
            className: classNames('shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80')
        },
        mask: ({ state }) => ({
            className: classNames('transition duration-200', { 'bg-black/40': state.containerVisible })
        }),
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-y-full',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left' || props.position === 'top-left' || props.position === 'bottom-left'
                ? {
                      enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right' || props.position === 'top-right' || props.position === 'bottom-right'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0 scale-75',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75'
                  };
        }
    },
  
}



function classNames() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args) {
      var classes = [];
      for (var i = 0; i < args.length; i++) {
        var className = args[i];
        if (!className) {
          continue;
        }
        var type = _typeof(className);
        if (type === 'string' || type === 'number') {
          classes.push(className);
        } else if (type === 'object') {
          var _classes = Array.isArray(className) ? className : Object.entries(className).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            return value ? key : null;
          });
          classes = _classes.length ? classes.concat(_classes.filter(function (c) {
            return !!c;
          })) : classes;
        }
      }
      return classes.join(' ').trim();
    }
    return undefined;
  }

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }