// tslint:disable:max-line-length
import * as React from 'react';
import './App.css';
import LogEntry from './LogEntry';
import Main from './Main';
import Sidebar from './Sidebar';
import * as crypto from 'crypto';
import Field from './Field';

declare global {
  interface Window {
    require: any;
  }
}

window.require('devtron').install();

import { IpcRenderer } from 'electron';
const electron = window.require('electron');

const ipcRenderer: IpcRenderer = electron.ipcRenderer;

interface AppState {
  columns: Field[];
  logMessages: LogEntry[];
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.addLogMessage = this.addLogMessage.bind(this);

    this.state = {
      columns: [],
      logMessages: []
    };
  }

  addTestLogMessages() {
    this.addLogMessage(
    {
      type: 'v2',
      message: `An unhandled exception was thrown by the application.
      Couchbase.Configuration.Server.Serialization.BootstrapException: Could not bootstrap - check inner exceptions for details. (A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond) (Could not bootstrap with CCCP. (A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond)) (An error occurred while sending the request.) ---> System.Net.Sockets.SocketException: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond
      at Couchbase.IO.DefaultConnectionFactory.<>c__0'1.<GetGeneric>b__0_0(IConnectionPool'1 p, IByteConverter c, BufferAllocator b)
      at Couchbase.IO.SharedConnectionPool'1.CreateAndAuthConnection()
      at Couchbase.IO.SharedConnectionPool'1.Acquire()
      at Couchbase.IO.Services.PooledIOService..ctor(IConnectionPool connectionPool)
      at Couchbase.IO.IOServiceFactory.<>c__DisplayClass0_0.<GetFactory>b__0(IConnectionPool pool)
      at Couchbase.Configuration.Server.Providers.CarrierPublication.CarrierPublicationProvider.GetConfig(String bucketName, String username, String password)
      --- End of inner exception stack trace ---
      at Couchbase.Core.ClusterController.CreateBucketImpl(String bucketName, String password, IAuthenticator authenticator)
      at Couchbase.Core.ClusterController.CreateBucket(String bucketName, String password, IAuthenticator authenticator)
      at Couchbase.ClusterHelper.GetBucket(String bucketName, String password)
      at Travix.Core.ShoppingCartApi.WebService.Services.CouchbaseBucketManager.GetBucket(String bucketName) in C:\Workspaces\Bitbucket\travix.core.shoppingcartapi\src\Travix.Core.ShoppingCartApi.WebService\Services\CouchbaseBucketManager.cs:line 10
      at Travix.Core.ShoppingCartApi.WebService.Services.ShoppingCartCouchbaseService.get_Bucket() in C:\Workspaces\Bitbucket\travix.core.shoppingcartapi\src\Travix.Core.ShoppingCartApi.WebService\Services\ShoppingCartCouchbaseService.cs:line 27
      at Travix.Core.ShoppingCartApi.WebService.Services.ShoppingCartCouchbaseService.<CreateNewCartAsync>d__11.MoveNext() in C:\Workspaces\Bitbucket\travix.core.shoppingcartapi\src\Travix.Core.ShoppingCartApi.WebService\Services\ShoppingCartCouchbaseService.cs:line 72
      --- End of stack trace from previous location where exception was thrown ---
      at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
      at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
      at System.Runtime.CompilerServices.TaskAwaiter'1.GetResult()
      at Travix.Core.ShoppingCartApi.WebService.Controllers.CartsController.<CreateNewCart>d__4.MoveNext() in C:\Workspaces\Bitbucket\travix.core.shoppingcartapi\src\Travix.Core.ShoppingCartApi.WebService\Controllers\CartsController.cs:line 54
      --- End of stack trace from previous location where exception was thrown ---
      at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
      at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
      at System.Runtime.CompilerServices.TaskAwaiter'1.GetResult()
      at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeActionMethodAsync>d__12.MoveNext()
      --- End of stack trace from previous location where exception was thrown ---
      at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
      at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
      at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeNextActionFilterAsync>d__10.MoveNext()
      --- End of stack trace from previous location where exception was thrown ---
      at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
      at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.Rethrow(ActionExecutedContext context)
      at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)
      at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeInnerFilterAsync>d__14.MoveNext()
      --- End of stack trace from previous location where exception was thrown ---
      at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
      at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
      at Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.<InvokeNextExceptionFilterAsync>d__23.MoveNext()
      ---> (Inner Exception #0) System.Net.Sockets.SocketException (0x80004005): A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond
      at Couchbase.IO.DefaultConnectionFactory.<>c__0'1.<GetGeneric>b__0_0(IConnectionPool'1 p, IByteConverter c, BufferAllocator b)
      at Couchbase.IO.SharedConnectionPool'1.CreateAndAuthConnection()
      at Couchbase.IO.SharedConnectionPool'1.Acquire()
      at Couchbase.IO.Services.PooledIOService..ctor(IConnectionPool connectionPool)
      at Couchbase.IO.IOServiceFactory.<>c__DisplayClass0_0.<GetFactory>b__0(IConnectionPool pool)
      at Couchbase.Configuration.Server.Providers.CarrierPublication.CarrierPublicationProvider.GetConfig(String bucketName, String username, String password)<---
      
      ---> (Inner Exception #1) System.AggregateException: Could not bootstrap with CCCP. (A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond) ---> System.Net.Sockets.SocketException: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond
      at Couchbase.IO.DefaultConnectionFactory.<>c__0'1.<GetGeneric>b__0_0(IConnectionPool'1 p, IByteConverter c, BufferAllocator b)
      at Couchbase.IO.SharedConnectionPool'1.CreateAndAuthConnection()
      at Couchbase.IO.SharedConnectionPool'1.Acquire()
      at Couchbase.IO.Services.PooledIOService..ctor(IConnectionPool connectionPool)
      at Couchbase.IO.IOServiceFactory.<>c__DisplayClass0_0.<GetFactory>b__0(IConnectionPool pool)
      at Couchbase.Configuration.Server.Providers.CarrierPublication.CarrierPublicationProvider.GetConfig(String bucketName, String username, String password)
      --- End of inner exception stack trace ---
      at Couchbase.Configuration.Server.Providers.CarrierPublication.CarrierPublicationProvider.GetConfig(String bucketName, String username, String password)
      at Couchbase.Core.ClusterController.CreateBucketImpl(String bucketName, String password, IAuthenticator authenticator)
      ---> (Inner Exception #0) System.Net.Sockets.SocketException (0x80004005): A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond
      at Couchbase.IO.DefaultConnectionFactory.<>c__0'1.<GetGeneric>b__0_0(IConnectionPool'1 p, IByteConverter c, BufferAllocator b)
      at Couchbase.IO.SharedConnectionPool'1.CreateAndAuthConnection()
      at Couchbase.IO.SharedConnectionPool'1.Acquire()
      at Couchbase.IO.Services.PooledIOService..ctor(IConnectionPool connectionPool)
      at Couchbase.IO.IOServiceFactory.<>c__DisplayClass0_0.<GetFactory>b__0(IConnectionPool pool)
      at Couchbase.Configuration.Server.Providers.CarrierPublication.CarrierPublicationProvider.GetConfig(String bucketName, String username, String password)<---
      <---
      
      ---> (Inner Exception #2) System.Net.Http.HttpRequestException: An error occurred while sending the request. ---> System.Net.Http.HttpRequestException: An error occurred while sending the request. ---> System.Net.Http.WinHttpException: The operation timed out
      at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
      at System.Threading.Tasks.RendezvousAwaitable'1.GetResult()
      at System.Net.Http.WinHttpHandler.<StartRequest>d__105.MoveNext()
      --- End of inner exception stack trace ---
      at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
      at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
      at System.Runtime.CompilerServices.ConfiguredTaskAwaitable'1.ConfiguredTaskAwaiter.GetResult()
      at System.Net.Http.HttpClient.<FinishSendAsyncBuffered>d__58.MoveNext()
      --- End of inner exception stack trace ---
      at Couchbase.Configuration.Server.Providers.Streaming.HttpServerConfig.DownloadString(Uri uri)
      at Couchbase.Configuration.Server.Providers.Streaming.HttpServerConfig.DownLoadConfig[T](Uri uri)
      at Couchbase.Configuration.Server.Providers.Streaming.HttpServerConfig.DownloadConfigs(Uri server)
      at System.Linq.Enumerable.Any[TSource](IEnumerable'1 source, Func'2 predicate)
      at Couchbase.Configuration.Server.Providers.Streaming.HttpServerConfig.Initialize()
      at Couchbase.Configuration.Server.Providers.Streaming.HttpStreamingProvider.StartProvider(String bucketName, String username, String password)
      at Couchbase.Configuration.Server.Providers.Streaming.HttpStreamingProvider.GetConfig(String bucketName, String username, String password)
      at Couchbase.Core.ClusterController.CreateBucketImpl(String bucketName, String password, IAuthenticator authenticator)<---`,
      timestamp: new Date(),
      applicationGroup: 'Platform',
      applicationName: 'DummyApi'
    },
    () => {
      this.addLogMessage(
      {
        type: 'v2',
        message: 'Log message 2',
        timestamp: new Date(),
        level: 'Info',
        applicationName: 'DummyApi'
      },
      () => {
        this.addLogMessage(
        {
          type: 'v2',
          message: 'Log message 3',
          timestamp: new Date(),
          level: 'Info',
          applicationGroup: 'Platform',
        });
      });
    });
  }

  addLogMessage(msg: any, callback?: () => void) {
    const keys = Object.keys(msg);
    const oldKeys = this.state.columns;

    const messagesCopy = this.state.logMessages.slice();

    const uniqueId = crypto.randomBytes(Math.ceil(16)).toString('hex').slice(0, 32).toLowerCase();

    Object.defineProperty(msg, '__id', { value: uniqueId });

    this.setState(
      {
        logMessages: [
          msg,
          ...messagesCopy],
        columns: oldKeys.concat(keys.filter(function (item: string) {
          // return oldKeys.indexOf(item) < 0;
          return oldKeys.findIndex(f => f.name === item) < 0;
        }).map(name => ({ name: name, visible: true })))
      },
      callback);
  }

  componentDidMount?() {
    this.registerIpcListener();

    this.addTestLogMessages();
  }

  private registerIpcListener() {
    ipcRenderer.on('newLogMessage', (event: Electron.Event, arg: any) => {
      const str = new TextDecoder('utf-8').decode(arg.logMessage);
      console.log('raw ipc message', str);
      const obj = JSON.parse(str);

      this.addLogMessage(obj);
    });
  }

  render() {
    return (
      <div id="root">
        <div id="sidebar">
          <Sidebar columns={this.state.columns} />
        </div>
        <div id="main">
          <Main logMessages={this.state.logMessages} columns={this.state.columns} />
        </div>
      </div>
    );
  }
}

export default App;
