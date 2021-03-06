public class BackgroundService extends Plugin {

private static final String TAG = "BackgroundService";
private static final String CALL_SERVICE_ACTION = "callService";

@Override
public PluginResult execute(String action, JSONArray args, String callbackId)
{
    Log.i(TAG, "Plugin Called");
PluginResult result = null;

if (CALL_SERVICE_ACTION.equals(action)) {
    Log.d(TAG, "CALL_SERVICE_ACTION");
    startService(new Intent(ctx, MyService.class));
}

else {
    result = new PluginResult(Status.INVALID_ACTION);
    Log.d(TAG, "Invalid action : " + action + " passed");
}

return result;
}

}