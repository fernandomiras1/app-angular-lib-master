import { animate, style, transition, trigger } from '@angular/animations';
export function collapseExpand(transitionIn = '250ms cubic-bezier(0.445, 0.05, 0.55, 0.95)', transitionOut = '250ms ease-in-out') {
    return trigger('collapseExpand', [
        transition(':enter', [
            style({ height: 0, opacity: 0, overflow: 'hidden', }),
            animate(transitionIn, style({ height: '*', opacity: 1, }))
        ]),
        transition(':leave', [
            style({ height: '*', opacity: 1, overflow: 'hidden', }),
            animate(transitionOut, style({ height: 0, opacity: 0, }))
        ])
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2VFeHBhbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsidXRpbHMvYW5pbWF0aW9ucy9jb2xsYXBzZUV4cGFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFxQixLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTdGLE1BQU0sVUFBVSxjQUFjLENBQzVCLFlBQVksR0FBRyw2Q0FBNkMsRUFDNUQsYUFBYSxHQUFHLG1CQUFtQjtJQUVuQyxPQUFPLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtRQUMvQixVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDckQsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNELENBQUM7UUFDRixVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLENBQUM7WUFDdkQsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFELENBQUM7S0FDSCxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uTWV0YWRhdGEsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZUV4cGFuZChcbiAgdHJhbnNpdGlvbkluID0gJzI1MG1zIGN1YmljLWJlemllcigwLjQ0NSwgMC4wNSwgMC41NSwgMC45NSknLFxuICB0cmFuc2l0aW9uT3V0ID0gJzI1MG1zIGVhc2UtaW4tb3V0J1xuKTogQW5pbWF0aW9uTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcignY29sbGFwc2VFeHBhbmQnLCBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgc3R5bGUoeyBoZWlnaHQ6IDAsIG9wYWNpdHk6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgfSksXG4gICAgICBhbmltYXRlKHRyYW5zaXRpb25Jbiwgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3BhY2l0eTogMSwgfSkpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3BhY2l0eTogMSwgb3ZlcmZsb3c6ICdoaWRkZW4nLCB9KSxcbiAgICAgIGFuaW1hdGUodHJhbnNpdGlvbk91dCwgc3R5bGUoeyBoZWlnaHQ6IDAsIG9wYWNpdHk6IDAsIH0pKVxuICAgIF0pXG4gIF0pO1xufVxuIl19