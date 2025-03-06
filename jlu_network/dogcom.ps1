$Path="path/to/dogcom" # path to dogcom.exe's root directory
$log="dogcom.$(Get-Date -Format "yyyy-MM-dd").log"
if(-Not (Test-Path "$Path\log\$log")) { 
    New-Item -ItemType File -Path "$Path\log" -Name $log -Force | Out-Null
}
$options="-m dhcp -c $Path\dogcom.conf -l $Path\log\$log"
Start-Process "$Path\dogcom.exe" -ArgumentList $options -WorkingDirectory "$Path" -WindowStyle Hidden