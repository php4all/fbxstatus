<?php

$text = mb_convert_encoding(file_get_contents("http://mafreebox.free.fr/pub/fbx_info.txt"), 'utf8', 'latin1');

// Informations générales
preg_match('/Modèle +(.*)/', $text, $matches);
$model = trim($matches[1]);

preg_match('/Version du firmware +(.*)/', $text, $matches);
$version = trim($matches[1]);


preg_match('/Nom d\'utilisateur +(.*)/', $text, $matches);
$utilisateur = trim($matches[1]);

preg_match('/Mode de connection +(.*)/', $text, $matches);
$mode = trim($matches[1]);

preg_match('/Temps depuis la mise en route +((\d+) jours?, )?((\d+) heures?, )?((\d+) minutes?)?/', $text, $matches);
$uptime = $matches[2] * 86400 + $matches[4] * 3600 + $matches[6] * 60;

$general = compact('model', 'version', 'utilisateur', 'mode', 'uptime');

// Téléphone
preg_match('/(Téléphone.*)Adsl/sm', $text, $matches);
$subtext = trim($matches[1]);
 
preg_match('/Etat +(.*)/', $subtext, $matches);
$etat = trim($matches[1]);

preg_match('/Etat du combiné +(.*)/', $subtext, $matches);
$combine = trim($matches[1]);

preg_match('/Sonnerie +(.*)/m', $subtext, $matches);
$sonnerie = trim($matches[1]);

$telephone = compact('combine', 'sonnerie', 'etat');

// ADSL

preg_match('/(Adsl.*)Wifi/sm', $text, $matches);
$subtext = trim($matches[1]);
 
preg_match('/Etat +(.*)/', $subtext, $matches);
$etat = trim($matches[1]);

preg_match('/Protocole +(.*)/', $subtext, $matches);
$protocole = trim($matches[1]);

preg_match('/Mode +(.*)/', $subtext, $matches);
$mode = trim($matches[1]);

preg_match('/Débit ATM +(\d+) kb\/s +(\d+) kb\/s/', $subtext, $matches);
array_shift($matches);
$debit = array_combine(array('descendant', 'montant'), $matches);

preg_match('/Marge de bruit +([\d\.]+) dB +([\d\.]+) dB/', $subtext, $matches);
array_shift($matches);
$marge = array_combine(array('descendant', 'montant'), $matches);

preg_match('/Atténuation +([\d\.]+) dB +([\d\.]+) dB/', $subtext, $matches);
array_shift($matches);
$attenuation = array_combine(array('descendant', 'montant'), $matches);

preg_match('/FEC +([\d\.]+) +([\d\.]+)/', $subtext, $matches);
array_shift($matches);
$fec = array_combine(array('descendant', 'montant'), $matches);

preg_match('/CRC +([\d\.]+) +([\d\.]+)/', $subtext, $matches);
array_shift($matches);
$crc = array_combine(array('descendant', 'montant'), $matches);

preg_match('/HEC +([\d\.]+) +([\d\.]+)/', $subtext, $matches);
array_shift($matches);
$hec = array_combine(array('descendant', 'montant'), $matches);

preg_match('/Journal de connexion adsl :.*--(.*?)Wifi/sm', $subtext, $matches);
$subtext = trim($matches[1]);
$log = [];
foreach (preg_split("/[\r\n]+/", $subtext) as $line) {
	$line = trim($line);
	$date = 'Mise en route';
	if(preg_match('/^(\d{2}\/\d{2}\/\d{4} à \d{2}:\d{2}:\d{2})/', $line, $matches)) {
		array_shift($matches);
		$date = current($matches);
		$date = \DateTime::createFromFormat('d/m/Y à H:i:s', $date)->getTimestamp() ;
	}

	preg_match('/(Connexion|Déconnexion)/', $line, $matches);
	$status = $matches[1];

	$logdebit = ['montant' => null, 'descendant' => null];
	if (preg_match('/(\d+) \/ (\d+)$/', $line, $matches)) {
		array_shift($matches);
		$logdebit = array_combine(array('descendant', 'montant'), $matches);
	}
	$log[] = ['date' => $date, 'status' => $status, 'debit' => $logdebit];
}

$adsl = compact('etat', 'protocole', 'mode', 'debit', 'marge', 'attenuation', 'fec', 'crc', 'hec', 'log');

// Wifi
preg_match('/(Wifi.*)Réseau/sm', $text, $matches);
$subtext = $matches[1];

preg_match('/Etat +(.*)/', $subtext, $matches);
$etat = trim($matches[1]);

preg_match('/Modèle +(.*)/', $subtext, $matches);
$model = trim($matches[1]);

preg_match('/Canal +(.*)/', $subtext, $matches);
$canal = trim($matches[1]);

preg_match('/.tat du réseau +(.*)/', $subtext, $matches);
$reseau = trim($matches[1]);

preg_match('/FreeWifi +(.*)/', $subtext, $matches);
$freewifi = trim($matches[1]);

preg_match('/FreeWifi Secure +(.*)/', $subtext, $matches);
$freewifiSecure = trim($matches[1]);

$wifi = compact('etat', 'model', 'canal', 'reseau', 'freewifi', 'freewifisecure');

// Réseau
preg_match('/(Réseau.*)/sm', $text, $matches);
$subtext = $matches[1];

preg_match('/Adresse MAC Freebox +(.*)/', $subtext, $matches);
$mac = trim($matches[1]);

preg_match('/Adresse IP +(.*)/', $subtext, $matches);
$ipv4 = trim($matches[1]);

preg_match('/IPv6 +(.*)/', $subtext, $matches);
$ipv6 = trim($matches[1]);

preg_match('/Mode routeur +(.*)/', $subtext, $matches);
$router = trim($matches[1]);

preg_match('/WAN +.*(\d+) ko\/s +(\d+) ko\/s/', $subtext, $matches);
array_shift($matches);
$wan = array_combine(array('montant', 'descendant'), $matches);

preg_match('/Ethernet +.*(\d+) ko\/s +(\d+) ko\/s/', $subtext, $matches);
array_shift($matches);
$ethernet = array_combine(array('montant', 'descendant'), $matches);

preg_match('/USB +.*(\d+) ko\/s +(\d+) ko\/s/', $subtext, $matches);
array_shift($matches);
$usb = @array_combine(array('montant', 'descendant'), $matches);

preg_match('/Switch +.*(\d+) ko\/s +(\d+) ko\/s/', $subtext, $matches);
array_shift($matches);
$switch = array_combine(array('montant', 'descendant'), $matches);

$interface = compact('wan', 'ethernet', 'usb', 'switch');

$reseau = compact('mac', 'ipv4', 'ipv6', 'router', 'interface');

header('Content-Type: application/json');
echo json_encode(compact('general', 'telephone', 'adsl', 'wifi', 'reseau'));
//var_dump(compact('general', 'telephone', 'adsl', 'wifi', 'reseau'));
