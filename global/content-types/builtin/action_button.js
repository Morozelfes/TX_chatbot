//CHECKSUM:88e5a11c265d8844cf204e69f99cf0f9cecdf24310fda9ee664dd51d77b6ae5f
"use strict";

const base = require('./_base');

function renderElement(data, channel) {
  // We don't render action button
  return [];
}

module.exports = {
  id: 'builtin_action-button',
  group: 'Built-in Messages',
  title: 'Action Button',
  jsonSchema: {
    description: 'A button that triggers an action, often used in cards',
    type: 'object',
    required: ['action', 'title'],
    properties: {
      title: {
        type: 'string',
        description: 'Title of the button'
      },
      action: {
        type: 'string',
        enum: ['Say something', 'Open URL', 'Postback'],
        default: 'Say something'
      }
    },
    dependencies: {
      action: {
        oneOf: [{
          properties: {
            action: {
              enum: ['Say something']
            },
            text: {
              type: 'string',
              title: 'Enter text or the ID of a content element (ex: #!builtin_text-myid)'
            }
          }
        }, {
          properties: {
            action: {
              enum: ['Open URL']
            },
            url: {
              type: 'string',
              title: 'Enter a valid URL'
            }
          },
          required: ['url']
        }, {
          properties: {
            action: {
              enum: ['Postback']
            },
            payload: {
              type: 'string'
            }
          },
          required: ['payload']
        }]
      }
    }
  },
  uiSchema: {},
  computePreviewText: formData => `Action: ${formData.action}`,
  renderElement: renderElement,
  hidden: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbl9idXR0b24uanMiXSwibmFtZXMiOlsiYmFzZSIsInJlcXVpcmUiLCJyZW5kZXJFbGVtZW50IiwiZGF0YSIsImNoYW5uZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiaWQiLCJncm91cCIsInRpdGxlIiwianNvblNjaGVtYSIsImRlc2NyaXB0aW9uIiwidHlwZSIsInJlcXVpcmVkIiwicHJvcGVydGllcyIsImFjdGlvbiIsImVudW0iLCJkZWZhdWx0IiwiZGVwZW5kZW5jaWVzIiwib25lT2YiLCJ0ZXh0IiwidXJsIiwicGF5bG9hZCIsInVpU2NoZW1hIiwiY29tcHV0ZVByZXZpZXdUZXh0IiwiZm9ybURhdGEiLCJoaWRkZW4iXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxJQUF2QixFQUE2QkMsT0FBN0IsRUFBc0M7QUFDcEM7QUFDQSxTQUFPLEVBQVA7QUFDRDs7QUFFREMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLEVBQUUsRUFBRSx1QkFEVztBQUVmQyxFQUFBQSxLQUFLLEVBQUUsbUJBRlE7QUFHZkMsRUFBQUEsS0FBSyxFQUFFLGVBSFE7QUFLZkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFdBQVcsRUFBRSx1REFESDtBQUVWQyxJQUFBQSxJQUFJLEVBQUUsUUFGSTtBQUdWQyxJQUFBQSxRQUFRLEVBQUUsQ0FBQyxRQUFELEVBQVcsT0FBWCxDQUhBO0FBSVZDLElBQUFBLFVBQVUsRUFBRTtBQUNWTCxNQUFBQSxLQUFLLEVBQUU7QUFDTEcsUUFBQUEsSUFBSSxFQUFFLFFBREQ7QUFFTEQsUUFBQUEsV0FBVyxFQUFFO0FBRlIsT0FERztBQUtWSSxNQUFBQSxNQUFNLEVBQUU7QUFDTkgsUUFBQUEsSUFBSSxFQUFFLFFBREE7QUFFTkksUUFBQUEsSUFBSSxFQUFFLENBQUMsZUFBRCxFQUFrQixVQUFsQixFQUE4QixVQUE5QixDQUZBO0FBR05DLFFBQUFBLE9BQU8sRUFBRTtBQUhIO0FBTEUsS0FKRjtBQWVWQyxJQUFBQSxZQUFZLEVBQUU7QUFDWkgsTUFBQUEsTUFBTSxFQUFFO0FBQ05JLFFBQUFBLEtBQUssRUFBRSxDQUNMO0FBQ0VMLFVBQUFBLFVBQVUsRUFBRTtBQUNWQyxZQUFBQSxNQUFNLEVBQUU7QUFDTkMsY0FBQUEsSUFBSSxFQUFFLENBQUMsZUFBRDtBQURBLGFBREU7QUFJVkksWUFBQUEsSUFBSSxFQUFFO0FBQ0pSLGNBQUFBLElBQUksRUFBRSxRQURGO0FBRUpILGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBSkk7QUFEZCxTQURLLEVBWUw7QUFDRUssVUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFlBQUFBLE1BQU0sRUFBRTtBQUNOQyxjQUFBQSxJQUFJLEVBQUUsQ0FBQyxVQUFEO0FBREEsYUFERTtBQUlWSyxZQUFBQSxHQUFHLEVBQUU7QUFDSFQsY0FBQUEsSUFBSSxFQUFFLFFBREg7QUFFSEgsY0FBQUEsS0FBSyxFQUFFO0FBRko7QUFKSyxXQURkO0FBVUVJLFVBQUFBLFFBQVEsRUFBRSxDQUFDLEtBQUQ7QUFWWixTQVpLLEVBd0JMO0FBQ0VDLFVBQUFBLFVBQVUsRUFBRTtBQUNWQyxZQUFBQSxNQUFNLEVBQUU7QUFDTkMsY0FBQUEsSUFBSSxFQUFFLENBQUMsVUFBRDtBQURBLGFBREU7QUFJVk0sWUFBQUEsT0FBTyxFQUFFO0FBQ1BWLGNBQUFBLElBQUksRUFBRTtBQURDO0FBSkMsV0FEZDtBQVNFQyxVQUFBQSxRQUFRLEVBQUUsQ0FBQyxTQUFEO0FBVFosU0F4Qks7QUFERDtBQURJO0FBZkosR0FMRztBQThEZlUsRUFBQUEsUUFBUSxFQUFFLEVBOURLO0FBZ0VmQyxFQUFBQSxrQkFBa0IsRUFBRUMsUUFBUSxJQUFLLFdBQVVBLFFBQVEsQ0FBQ1YsTUFBTyxFQWhFNUM7QUFpRWZiLEVBQUFBLGFBQWEsRUFBRUEsYUFqRUE7QUFrRWZ3QixFQUFBQSxNQUFNLEVBQUU7QUFsRU8sQ0FBakIiLCJzb3VyY2VSb290IjoiL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvYnVpbGQtd2luZG93cy9tb2R1bGVzL2J1aWx0aW4vc3JjL2JhY2tlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlID0gcmVxdWlyZSgnLi9fYmFzZScpXG5cbmZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZGF0YSwgY2hhbm5lbCkge1xuICAvLyBXZSBkb24ndCByZW5kZXIgYWN0aW9uIGJ1dHRvblxuICByZXR1cm4gW11cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlkOiAnYnVpbHRpbl9hY3Rpb24tYnV0dG9uJyxcbiAgZ3JvdXA6ICdCdWlsdC1pbiBNZXNzYWdlcycsXG4gIHRpdGxlOiAnQWN0aW9uIEJ1dHRvbicsXG5cbiAganNvblNjaGVtYToge1xuICAgIGRlc2NyaXB0aW9uOiAnQSBidXR0b24gdGhhdCB0cmlnZ2VycyBhbiBhY3Rpb24sIG9mdGVuIHVzZWQgaW4gY2FyZHMnLFxuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHJlcXVpcmVkOiBbJ2FjdGlvbicsICd0aXRsZSddLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIG9mIHRoZSBidXR0b24nXG4gICAgICB9LFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBlbnVtOiBbJ1NheSBzb21ldGhpbmcnLCAnT3BlbiBVUkwnLCAnUG9zdGJhY2snXSxcbiAgICAgICAgZGVmYXVsdDogJ1NheSBzb21ldGhpbmcnXG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IHtcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICBvbmVPZjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgZW51bTogWydTYXkgc29tZXRoaW5nJ11cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRW50ZXIgdGV4dCBvciB0aGUgSUQgb2YgYSBjb250ZW50IGVsZW1lbnQgKGV4OiAjIWJ1aWx0aW5fdGV4dC1teWlkKSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICBlbnVtOiBbJ09wZW4gVVJMJ11cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFbnRlciBhIHZhbGlkIFVSTCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBbJ3VybCddXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgIGVudW06IFsnUG9zdGJhY2snXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBbJ3BheWxvYWQnXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1aVNjaGVtYToge30sXG5cbiAgY29tcHV0ZVByZXZpZXdUZXh0OiBmb3JtRGF0YSA9PiBgQWN0aW9uOiAke2Zvcm1EYXRhLmFjdGlvbn1gLFxuICByZW5kZXJFbGVtZW50OiByZW5kZXJFbGVtZW50LFxuICBoaWRkZW46IHRydWVcbn1cbiJdfQ==