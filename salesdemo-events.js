var salesdemo_events = [
	{
	  "payload": {
	    "summary": "Apollo Deploy",
	    "source": "aws:elasticache:us-east-1:852559987:cluster/api-stats-prod-003",
	    "severity": "info",
	    "component": "app server",
	    "group": "prod-datapipe",
	    "class": "deploy",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "bd339bf390474324a0289cdf10c96560",
	  "dedup_key": "logglydeploykey",
	  "images": [{
	    "src": "https://chart.googleapis.com/chart?chs=600x400&chd=t:6,2,9,5,2,5,7,4,8,2,1&cht=lc&chds=a&chxt=y&chm=D,0033FF,0,0,5,1",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Loggly",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "System clock is wildly slow in prod-artemis on host:prod-artemis-cass25 on {host:prod-artemis-cass25}",
	    "source": "prod-artemis-cass25",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-artemis} by {host} < -500",
	    "group": "Base, cass, env:prod-artemis, host:prod-artemis-cass25, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "6de85e24ed9a44b38ab73df515efe86f",
	  "dedup_key": "artemiskey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Datadog",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "System clock is wildly slow in prod-artemis on host:prod-artemis-cass25 on {host:prod-artemis-cass25}",
	    "source": "prod-artemis-cass25",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-artemis} by {host} < -500",
	    "group": "Base, cass, env:prod-artemis, host:prod-artemis-cass25, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "6de85e24ed9a44b38ab73df515efe86f",
	  "dedup_key": "artemiskey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Datadog",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "System clock is wildly slow in prod-artemis on host:prod-artemis-cass25 on {host:prod-artemis-cass25}",
	    "source": "prod-artemis-cass25",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-artemis} by {host} < -500",
	    "group": "Base, cass, env:prod-artemis, host:prod-artemis-cass25, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "6de85e24ed9a44b38ab73df515efe86f",
	  "dedup_key": "artemiskey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Datadog",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "System clock is wildly slow in prod-artemis on host:prod-artemis-cass25 on {host:prod-artemis-cass25}",
	    "source": "prod-artemis-cass25",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-artemis} by {host} < -500",
	    "group": "Base, cass, env:prod-artemis, host:prod-artemis-cass25, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "6de85e24ed9a44b38ab73df515efe86f",
	  "dedup_key": "artemiskey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Datadog",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "System clock is wildly slow in prod-artemis on host:prod-artemis-cass25 on {host:prod-artemis-cass25}",
	    "source": "prod-artemis-cass25",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-artemis} by {host} < -500",
	    "group": "Base, cass, env:prod-artemis, host:prod-artemis-cass25, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "6de85e24ed9a44b38ab73df515efe86f",
	  "dedup_key": "artemiskey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Datadog",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "System clock is wildly slow in prod-artemis on host:prod-artemis-cass25 on {host:prod-artemis-cass25}",
	    "source": "prod-artemis-cass25",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-artemis} by {host} < -500",
	    "group": "Base, cass, env:prod-artemis, host:prod-artemis-cass25, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "6de85e24ed9a44b38ab73df515efe86f",
	  "dedup_key": "artemiskey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Datadog",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "System clock is wildly slow in prod-artemis on host:prod-artemis-cass25 on {host:prod-artemis-cass25}",
	    "source": "prod-artemis-cass25",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-artemis} by {host} < -500",
	    "group": "Base, cass, env:prod-artemis, host:prod-artemis-cass25, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "6de85e24ed9a44b38ab73df515efe86f",
	  "dedup_key": "artemiskey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Datadog",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "System clock is wildly slow in prod-artemis on host:prod-artemis-cass25 on {host:prod-artemis-cass25}",
	    "source": "prod-artemis-cass25",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-artemis} by {host} < -500",
	    "group": "Base, cass, env:prod-artemis, host:prod-artemis-cass25, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "6de85e24ed9a44b38ab73df515efe86f",
	  "dedup_key": "artemiskey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "Datadog",
	  "client_url": "https://monitoring.example.com"
	},
	{
	  "payload": {
	    "summary": "Docker daemon is not responsive on stg-clustermgr-client26 on {host:stg-clustermgr-client26}",
	    "source": "stg-clustermgr-client26",
	    "severity": "info",
	    "location" : "stg-clustermgr-client",
	    "component": "@pagerduty-ClusterMgrLow pagerduty.docker.ps_runtime over env:stg-clustermgr,host:stg-clustermgr-client26,role:clustermgr-client was > 4.0 on average during the last 5m. Metric value: 5.0",
	    "group": "aws-test, aws_env:stg, aws_type:stg-clustermgr-client, base, clustermgr-client, env:stg-clustermgr, host:stg-clustermgr-client26, monitor, pd_az:us-west-2c, staging",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "33bf4742f935498db96a1ce8a59b6584",
	  "dedup_key": "clustermanagerdedupkey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2017-06-13/0485bc55a385290016d68f75272369bb1b548706.png",
	    "href": "https://app.datadoghq.com/monitors#1755226?to_ts=1497372180000&group=host%3Astg-clustermgr-client26&from_ts=1497370980000",
	    "alt": "Snapshot of metric"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "View in Datadog",
	  "client_url": "https://app.datadoghq.com/monitors#1755226?to_ts=1497372180000&group=host%3Astg-clustermgr-client26&from_ts=1497370980000"
	},
	{
	  "payload": {
	    "summary": "Long history length in xdb (possible stuck transaction)",
	    "source": "farnsworth",
	    "severity": "error",
	    "location" : "prod-artemis",
	    "component": "avg(last_5m):avg:mysql2.Innodb_history_list_length{role:xdb} by {host} > 12500",
	    "group": "Aws-prod, base, env:prod, host:farnsworth, monitor, pd_az:us-west-2c, production, xdb, xtradb",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "33bf4742f935498db96a1ce8a59b6584",
	  "dedup_key": "farnsworthclustermanagerdedupkey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "View in Datadog",
	  "client_url": "https://app.datadoghq.com/monitors#696406?to_ts=1479511020000&group=host%3Aprod-artemis-cass25&from_ts=1479507420000"
	},
	{
	  "payload": {
	    "summary": "Lack of free swap space on Zabbix server : PROBLEM for Zabbix server",
	    "source": "zabbix server",
	    "severity": "warning",
	    "location" : "prod",
	    "component": "avg(last_10m):avg:mercury.ostrich.error{env:prod-hg} by {host} > 0.2",
	    "group": "Base, env:prod-hg, hg, host:prod5, mercury, monitor, pd_az:azure-fresno, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "79fddd5152054a19ab38ba705e36101b",
	  "dedup_key": "zabbixclustermanagerdedupkey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "View in Zabbix",
	  "client_url": "https://app.datadoghq.com/monitors#696406?to_ts=1479511020000&group=host%3Aprod-artemis-cass25&from_ts=1479507420000"
	},
	{
	  "payload": {
	    "summary": "rSYS-4-CONFIG_RESOLVE_FAILURE",
	    "source": "prod-gemini-cass31",
	    "severity": "warning",
	    "location" : "prod-gemini",
	    "component": "amin(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-gemini} by {host} < -500",
	    "group": "Aws-prod, aws_env:prod, aws_type:prod-gemini-cass, base, cass, env:prod-gemini, host:prod-gemini-cass31, monitor, pd_az:us-west-2b, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "90d0f1c8d2de4b2a874fa434d310eedc",
	  "dedup_key": "sensuclustermanagerdedupkey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "View in Sensu",
	  "client_url": "https://app.datadoghq.com/monitors#696406?to_ts=1479511020000&group=host%3Aprod-artemis-cass25&from_ts=1479507420000"
	},
	{
	  "payload": {
	    "summary": "Bad Gateway",
	    "source": "prod-gemini-cass31",
	    "severity": "critical",
	    "location" : "prod-gemini",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-gemini} by {host} < -500",
	    "group": "Aws-prod, aws_env:prod, aws_type:prod-gemini-cass, base, cass, env:prod-gemini, host:prod-gemini-cass31, monitor, pd_az:us-west-2b, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "4458d4c6a311466a948a708f3b98a934",
	  "dedup_key": "geminirouterdedupkey",
	    "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }
	    ],
	  "event_action": "trigger",
	  "client": "View in Sensu",
	  "client_url": "https://app.datadoghq.com/monitors#696406?to_ts=1479511020000&group=host%3Aprod-artemis-cass25&from_ts=1479507420000"
	},
	{
	  "payload": {
	    "summary": "(WARN)build failed: r2d2.uat.widegetbuilder.com:8080",
	    "source": "prod-gemini-cass31",
	    "severity": "info",
	    "location" : "uat-r2d2",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:uat-r2d2} by {host} < -500",
	    "group": "Aws-prod, aws_env:prod, aws_type:uat-r2d2, base, cass, env:uat-gemini, host:uat-gemini-cass31, monitor, pd_az:us-west-2b, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "1131045406ce4ad3956d804608830b54",
	  "dedup_key": "appdydedupkey",
	  "images": [{
	    "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	    "href": "https://example.com/",
	    "alt": "Example text"
	  }],
	  "event_action": "trigger",
	  "client": "View in AppDynamics",
	  "client_url": "https://app.datadoghq.com/monitors#696406?to_ts=1479511020000&group=host%3Aprod-artemis-cass25&from_ts=1479507420000"
	},
	{
	  "payload": {
	    "summary": "Disk is full on host:lt-apollo-app06 on {host:lt-apollo-app06}",
	    "source": "lt-apollo-app06",
	    "severity": "error",
	    "location": "uat-c3po",
	    "component": "min(last_15m):avg:pagerduty.ntp.offset_ms{env:prod-c3po} by {host} < -500",
	    "group": "Aws-prod, aws_env:prod, aws_type:prod-c3po, base, cass, env:prod-gemini, host:prodgemini-cass31, monitor, pd_az:us-west-2b, production",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "a2a9dce277864a66abddfe0bd19e53af",
	  "dedup_key": "datadaogdedupkey",
	  "images": [
	    {
	      "src": "https://p.datadoghq.com/snapshot/view/dd-snapshots-prod/org_1804/2016-11-18/de10da672f3a27d53f0303df860d115137d3d591.png",
	      "href": "https://example.com/",
	      "alt": "Example text"
	    }
	  ],
	  "event_action": "trigger",
	  "client": "View in DataDog",
	  "client_url": "https://app.datadoghq.com/monitors#696406?to_ts=1479511020000&group=host%3Aprod-artemis-cass25&from_ts=1479507420000"
	},
	{
	  "payload": {
	    "summary": "Notification Channel Test - JS Errors",
	    "source": "aws:elasticache:us-east-1:852559987:cluster/api-stats-prod-003",
	    "severity": "info",
	    "location": "Datacenter 7",
	    "component": "mysql",
	    "group": "prod-datapipe",
	    "class": "metric_alert_monitor",
	    "custom_details": {
	      "ping time": "1500ms",
	      "load avg": 0.75
	    }
	  },
	  "routing_key": "3fbb4d177010442cb1919aa8dda9fe1a",
	  "dedup_key": "posdedupkey",
	  "images": [
	    {
	      "src": "https://chart.googleapis.com/chart?chs=600x400&chd=t:6,2,9,5,2,5,7,4,8,2,1&cht=lc&chds=a&chxt=y&chm=D,0033FF,0,0,5,1",
	      "href": "https://acme.pagerduty.com",
	      "alt": "This is a sample link"
	    }
	  ],
	  "event_action": "trigger",
	  "client": "View in New Relic",
	  "client_url": "https://alerts.newrelic.com/accounts/5127/incidents/0"
	}
];
