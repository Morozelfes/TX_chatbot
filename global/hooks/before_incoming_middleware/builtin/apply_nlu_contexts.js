//CHECKSUM:56d28314684fc29aa87ad55f4b8ef6431c8a46756a03378dd55fed3ecb059641
"use strict";

if (event.state && event.state.session && event.state.session.nluContexts && event.state.session.nluContexts.length) {
  event.nlu = event.nlu || {};
  Object.assign(event.nlu, {
    includedContexts: event.state.session.nluContexts.map(x => x.context)
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5X25sdV9jb250ZXh0cy5qcyJdLCJuYW1lcyI6WyJldmVudCIsInN0YXRlIiwic2Vzc2lvbiIsIm5sdUNvbnRleHRzIiwibGVuZ3RoIiwibmx1IiwiT2JqZWN0IiwiYXNzaWduIiwiaW5jbHVkZWRDb250ZXh0cyIsIm1hcCIsIngiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixJQUFlRCxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBM0IsSUFBc0NGLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxXQUExRCxJQUF5RUgsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JDLFdBQXBCLENBQWdDQyxNQUE3RyxFQUFxSDtBQUNuSEosRUFBQUEsS0FBSyxDQUFDSyxHQUFOLEdBQVlMLEtBQUssQ0FBQ0ssR0FBTixJQUFhLEVBQXpCO0FBRUFDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxLQUFLLENBQUNLLEdBQXBCLEVBQXlCO0FBQ3ZCRyxJQUFBQSxnQkFBZ0IsRUFBRVIsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JDLFdBQXBCLENBQWdDTSxHQUFoQyxDQUFvQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLE9BQTNDO0FBREssR0FBekI7QUFHRCIsInNvdXJjZVJvb3QiOiIvdmFyL2xpYi9qZW5raW5zL3dvcmtzcGFjZS9idWlsZC13aW5kb3dzL21vZHVsZXMvYnVpbHRpbi9zcmMvYmFja2VuZCIsInNvdXJjZXNDb250ZW50IjpbImlmIChldmVudC5zdGF0ZSAmJiBldmVudC5zdGF0ZS5zZXNzaW9uICYmIGV2ZW50LnN0YXRlLnNlc3Npb24ubmx1Q29udGV4dHMgJiYgZXZlbnQuc3RhdGUuc2Vzc2lvbi5ubHVDb250ZXh0cy5sZW5ndGgpIHtcbiAgZXZlbnQubmx1ID0gZXZlbnQubmx1IHx8IHt9XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudC5ubHUsIHtcbiAgICBpbmNsdWRlZENvbnRleHRzOiBldmVudC5zdGF0ZS5zZXNzaW9uLm5sdUNvbnRleHRzLm1hcCh4ID0+IHguY29udGV4dClcbiAgfSlcbn1cbiJdfQ==