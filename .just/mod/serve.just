example := "go tool example"

serve-example:
    {{ example }} serve -c \
    	--server-addr=:8081
