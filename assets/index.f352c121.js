const d=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};d();const n=new Cesium.Viewer("cesiumContainer");Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYTk5NDZhNy1hZGRiLTQyNzUtYjRmZC0zZDM4ZDc0ZDRhZGQiLCJpZCI6NDYwNDcsImlhdCI6MTYxNTg3NTI1Mn0.QPYRQfxoUqWlLyFOYTbZKryd8BuVQCosSZD4tVlVpQ8";n.scene.primitives.add(Cesium.createOsmBuildings());async function p(){const ss=(await fetch("data/MU5735-Flightradar24-Granular-Data.csv").then(o=>o.text()));const s=ss[0].split('\r\n');console.log(s);const i=[];for(let o=0;o<s.length;o++)i[o]=s[o].split(",");console.log(i);const r=Cesium.JulianDate.fromIso8601(i[1][0].replace(" ","T").slice(0,20)),e=Cesium.JulianDate.addSeconds(r,60,new Cesium.JulianDate),t=Cesium.JulianDate.fromIso8601(i[i.length-1][0].replace(" ","T").slice(0,20)),c=new Cesium.SampledPositionProperty;for(let o=1;o<i.length;o++){const l=i[o],m=Cesium.JulianDate.fromIso8601(l[0].replace(" ","T").slice(0,20)),u=Cesium.Cartesian3.fromDegrees(Number(l[4]),Number(l[3]),Number(l[6]));c.addSample(m,u),n.entities.add({description:`Location: (${l[4]}, ${l[3]}, ${l[6]})`,position:u,point:{pixelSize:10,color:Cesium.Color.RED}})}n.clock.startTime=e.clone(),n.clock.stopTime=t.clone(),n.clock.currentTime=e.clone(),n.timeline.zoomTo(e,t),f(r,t,c)}p();n.clock.multiplier=1.3;n.clock.shouldAnimate=!0;async function f(a,s,i){const r=await Cesium.IonResource.fromAssetId(895338),e=n.entities.add({availability:new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({start:a,stop:s})]),position:i,model:{uri:r},orientation:new Cesium.VelocityOrientationProperty(i),path:new Cesium.PathGraphics({width:3})});n.trackedEntity=e}
