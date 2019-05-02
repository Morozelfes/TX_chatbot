//CHECKSUM:24b3f246707b6bf143a71766f886312419c0beb84436583d0b67e40b85a05074
'use strict';
/**
 * This is called when the bot is on a new stage.
 *
 * @param bp The botpress SDK
 * @param previousBotConfig The complete configuration of the bot before stage change request
 * @param bot The complete configuration of the bot
 * @param users The list of users of that workspace (email, role)
 * @param stages The list of configured stages
 */

const stageChanged = async () => {
  // Any custom logic would go here
  // For example, send an email to the person who requested the stage change
  if (!previousBotConfig.pipeline_status.stage_request) {
    return;
  }

  const {
    requested_by: requesterEmail
  } = previousBotConfig.pipeline_status.stage_request;
  const {
    promoted_by,
    id: newStage
  } = bot.pipeline_status.current_stage;

  if (requesterEmail && promoted_by !== requesterEmail) {
    // Send the email here
    console.log(`Your bot ${bot.id} was promoted to stage ${newStage} by ${promoted_by}`);
  }
};

return stageChanged();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi5zdGFnZV9jaGFuZ2VkLmpzIl0sIm5hbWVzIjpbInN0YWdlQ2hhbmdlZCIsInByZXZpb3VzQm90Q29uZmlnIiwicGlwZWxpbmVfc3RhdHVzIiwic3RhZ2VfcmVxdWVzdCIsInJlcXVlc3RlZF9ieSIsInJlcXVlc3RlckVtYWlsIiwicHJvbW90ZWRfYnkiLCJpZCIsIm5ld1N0YWdlIiwiYm90IiwiY3VycmVudF9zdGFnZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7QUFTQSxNQUFNQSxZQUFZLEdBQUcsWUFBWTtBQUMvQjtBQUNBO0FBQ0EsTUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0MsZUFBbEIsQ0FBa0NDLGFBQXZDLEVBQXNEO0FBQ3BEO0FBQ0Q7O0FBQ0QsUUFBTTtBQUFFQyxJQUFBQSxZQUFZLEVBQUVDO0FBQWhCLE1BQW1DSixpQkFBaUIsQ0FBQ0MsZUFBbEIsQ0FBa0NDLGFBQTNFO0FBQ0EsUUFBTTtBQUFFRyxJQUFBQSxXQUFGO0FBQWVDLElBQUFBLEVBQUUsRUFBRUM7QUFBbkIsTUFBZ0NDLEdBQUcsQ0FBQ1AsZUFBSixDQUFvQlEsYUFBMUQ7O0FBQ0EsTUFBSUwsY0FBYyxJQUFJQyxXQUFXLEtBQUtELGNBQXRDLEVBQXNEO0FBQ3BEO0FBQ0FNLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFlBQVdILEdBQUcsQ0FBQ0YsRUFBRywwQkFBeUJDLFFBQVMsT0FBTUYsV0FBWSxFQUFuRjtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSxPQUFPTixZQUFZLEVBQW5CIiwic291cmNlUm9vdCI6Ii92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2J1aWxkLXdpbmRvd3MvbW9kdWxlcy9idWlsdGluL3NyYy9iYWNrZW5kIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgYm90IGlzIG9uIGEgbmV3IHN0YWdlLlxuICpcbiAqIEBwYXJhbSBicCBUaGUgYm90cHJlc3MgU0RLXG4gKiBAcGFyYW0gcHJldmlvdXNCb3RDb25maWcgVGhlIGNvbXBsZXRlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJvdCBiZWZvcmUgc3RhZ2UgY2hhbmdlIHJlcXVlc3RcbiAqIEBwYXJhbSBib3QgVGhlIGNvbXBsZXRlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJvdFxuICogQHBhcmFtIHVzZXJzIFRoZSBsaXN0IG9mIHVzZXJzIG9mIHRoYXQgd29ya3NwYWNlIChlbWFpbCwgcm9sZSlcbiAqIEBwYXJhbSBzdGFnZXMgVGhlIGxpc3Qgb2YgY29uZmlndXJlZCBzdGFnZXNcbiAqL1xuY29uc3Qgc3RhZ2VDaGFuZ2VkID0gYXN5bmMgKCkgPT4ge1xuICAvLyBBbnkgY3VzdG9tIGxvZ2ljIHdvdWxkIGdvIGhlcmVcbiAgLy8gRm9yIGV4YW1wbGUsIHNlbmQgYW4gZW1haWwgdG8gdGhlIHBlcnNvbiB3aG8gcmVxdWVzdGVkIHRoZSBzdGFnZSBjaGFuZ2VcbiAgaWYgKCFwcmV2aW91c0JvdENvbmZpZy5waXBlbGluZV9zdGF0dXMuc3RhZ2VfcmVxdWVzdCkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHsgcmVxdWVzdGVkX2J5OiByZXF1ZXN0ZXJFbWFpbCB9ID0gcHJldmlvdXNCb3RDb25maWcucGlwZWxpbmVfc3RhdHVzLnN0YWdlX3JlcXVlc3RcbiAgY29uc3QgeyBwcm9tb3RlZF9ieSwgaWQ6IG5ld1N0YWdlIH0gPSBib3QucGlwZWxpbmVfc3RhdHVzLmN1cnJlbnRfc3RhZ2VcbiAgaWYgKHJlcXVlc3RlckVtYWlsICYmIHByb21vdGVkX2J5ICE9PSByZXF1ZXN0ZXJFbWFpbCkge1xuICAgIC8vIFNlbmQgdGhlIGVtYWlsIGhlcmVcbiAgICBjb25zb2xlLmxvZyhgWW91ciBib3QgJHtib3QuaWR9IHdhcyBwcm9tb3RlZCB0byBzdGFnZSAke25ld1N0YWdlfSBieSAke3Byb21vdGVkX2J5fWApXG4gIH1cbn1cblxucmV0dXJuIHN0YWdlQ2hhbmdlZCgpXG4iXX0=