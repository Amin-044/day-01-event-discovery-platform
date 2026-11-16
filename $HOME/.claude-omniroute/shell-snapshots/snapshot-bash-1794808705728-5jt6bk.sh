# Snapshot file
# Unset all aliases to avoid conflicts with functions
unalias -a 2>/dev/null || true
shopt -s expand_aliases
# Check for rg availability
if ! hash rg 2>/dev/null && ! typeset -f rg >/dev/null 2>&1; then
  function rg {
  if [[ -x 'C:\Users\Amin0\.local\bin\claude.exe' ]]; then
  if [[ -n ${ZSH_VERSION:-} ]]; then
    ARGV0=rg 'C:\Users\Amin0\.local\bin\claude.exe' ${1+"$@"}
  elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
    ARGV0=rg 'C:\Users\Amin0\.local\bin\claude.exe' ${1+"$@"}
  else
    (exec -a rg 'C:\Users\Amin0\.local\bin\claude.exe' ${1+"$@"})
  fi
  elif [[ -x /c/Users/Amin0/.local/bin/claude.exe ]]; then
  if [[ -n ${ZSH_VERSION:-} ]]; then
    ARGV0=rg /c/Users/Amin0/.local/bin/claude.exe ${1+"$@"}
  elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
    ARGV0=rg /c/Users/Amin0/.local/bin/claude.exe ${1+"$@"}
  else
    (exec -a rg /c/Users/Amin0/.local/bin/claude.exe ${1+"$@"})
  fi
  else command rg ${1+"$@"}; fi
}
fi
# Shadow pkill to refuse patterns matching the CLI process
unalias pkill 2>/dev/null || true
function pkill {
  if [ -n "${CLAUDE_PID:-}" ] && [ -r "/proc/${CLAUDE_PID}/comm" ]; then
    local _cc_skip="" _cc_a
    local -a _cc_probe=()
    for _cc_a in ${1+"$@"}; do
      if [ -n "$_cc_skip" ]; then _cc_skip=""; continue; fi
      case "$_cc_a" in
        --signal) _cc_skip=1 ;;
        --signal=*|-e|--echo) ;;
        -[0-9]*) ;;
        -[PUGOF]?*) _cc_probe+=("$_cc_a") ;;
        -[ABCDEFGHIJKLMNOPQRSTUVWXYZ][ABCDEFGHIJKLMNOPQRSTUVWXYZ0-9]*) ;;
        *) _cc_probe+=("$_cc_a") ;;
      esac
    done
    if command pgrep ${_cc_probe[@]+"${_cc_probe[@]}"} 2>/dev/null | command grep -qx "${CLAUDE_PID}"; then
      printf 'pkill: refusing to run — this pattern matches the Claude CLI process (PID %s). Narrow the pattern, or target your own children with `pkill -P $$ ...`.\n' "${CLAUDE_PID}" >&2
      return 1
    fi
  fi
  command pkill ${1+"$@"}
}
export PATH='/c/Users/Amin0/bin:/mingw64/bin:/usr/local/bin:/usr/bin:/bin:/mingw64/bin:/usr/bin:/c/Users/Amin0/bin:/c/Users/Amin0/.local/omni-claude:/c/Program Files/Common Files/Oracle/Java/javapath:/c/WINDOWS/system32:/c/WINDOWS:/c/WINDOWS/System32/Wbem:/c/WINDOWS/System32/WindowsPowerShell/v1.0:/c/WINDOWS/System32/OpenSSH:/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/c/MinGW/bin:/c/Program Files/Java/jdk-25/bin:/c/Program Files/dotnet:/cmd:/mingw64/bin:/usr/bin:/c/Program Files/nodejs:/c/Users/Amin0/.local/bin:/c/Program Files/MongoDB/Server/8.3/bin:/c/Program Files/Microsoft SQL Server/170/Tools/Binn:/c/Program Files (x86)/Microsoft SQL Server/100/Tools/Binn:/c/Program Files/Microsoft SQL Server/100/Tools/Binn:/c/Program Files/Microsoft SQL Server/100/DTS/Binn:/c/wamp64/bin/php/php8.5.0:/c/Users/Amin0/AppData/Local/Programs/Python/Python313/Scripts:/c/Users/Amin0/AppData/Local/Programs/Python/Python313:/c/Users/Amin0/AppData/Local/Programs/Python/Launcher:/c/Users/Amin0/AppData/Local/Microsoft/WindowsApps:/c/VS_code/Microsoft VS Code/bin:/c/Users/Amin0/AppData/Local/GitHubDesktop/bin:/c/Users/Amin0/AppData/Roaming/npm:/c/Users/Amin0/AppData/Local/Programs/Ollama:/c/Program Files/mongosh:/c/Program Files/MongoDB/Server/8.3/bin:/c/wamp64/bin/php/php8.0.30:/c/Users/Amin0/AppData/Local/ComposerSetup/bin:/c/Users/Amin0/AppData/Roaming/Composer/vendor/bin:/c/VS_code/Microsoft VS Code/bin/copilot-shim:/c/Users/Amin0/AppData/Roaming/Code/User/globalStorage/github.copilot-chat/debugCommand:/c/VS_code/Microsoft VS Code/bin/copilot-shim:/usr/bin/vendor_perl:/usr/bin/core_perl'
