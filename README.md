
# Installing kafka

`brew cask install homebrew/cask-versions/java8`

`brew install kafka`

# Starting

`brew services start zookeeper`

`brew services start kafka`

# Configuring

`sudo mkdir -p /usr/local/var/run/zookeeper/data`

`sudo chmod 777 /usr/local/var/run/zookeeper/data`

`zkServer start`

`mkdir -p /usr/local/var/lib/kafka-logs`

`sudo chmod 777 /usr/local/var/lib/kafka-logs`

`/usr/local/Cellar/kafka/2.1.0/libexec/bin/kafka-server-start.sh /usr/local/etc/kafka/server.properties`

Please add the `advertised.host.name = localhost` configuration in `/usr/local/etc/kafka/server.properties` to proceed with local tests


# Consuming

`/usr/local/bin/kafka-console-consumer --bootstrap-server localhost:9092 --topic TOPIC --from-beginning`
