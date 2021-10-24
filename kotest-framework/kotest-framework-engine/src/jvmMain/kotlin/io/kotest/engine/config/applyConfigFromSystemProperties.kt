package io.kotest.engine.config

import io.kotest.core.config.Configuration
import io.kotest.core.config.LogLevel
import io.kotest.core.internal.KotestEngineProperties
import io.kotest.core.names.DuplicateTestNameMode
import io.kotest.core.spec.IsolationMode
import io.kotest.core.test.AssertionMode
import io.kotest.mpp.env
import io.kotest.mpp.sysprop
import kotlin.time.Duration
import kotlin.time.milliseconds

/**
 * Uses system properties to load configuration values onto the supplied [Configuration] object.
 *
 * Note: This function will have no effect on non-JVM targets.
 */
internal actual fun applyConfigFromSystemProperties(configuration: Configuration) {
   isolationMode()?.let { configuration.isolationMode = it }
   assertionMode()?.let { configuration.assertionMode = it }
   parallelism()?.let { configuration.parallelism = it }
   concurrentTests()?.let { configuration.concurrentTests = it }
   concurrentSpecs()?.let { configuration.concurrentSpecs = it }
   timeout()?.let { configuration.timeout = it }
   invocationTimeout()?.let { configuration.invocationTimeout = it }
   allowMultilineTestName()?.let { configuration.removeTestNameWhitespace = it }
   globalAssertSoftly()?.let { configuration.globalAssertSoftly = it }
   testNameAppendTags()?.let { configuration.testNameAppendTags = it }
   duplicateTestNameMode()?.let { configuration.duplicateTestNameMode = it }
   projectTimeout()?.let { configuration.projectTimeout = it }
   logLevel().let { configuration.logLevel = it }
}

internal fun isolationMode(): IsolationMode? =
   sysprop(KotestEngineProperties.isolationMode)?.let { IsolationMode.valueOf(it) }

internal fun assertionMode(): AssertionMode? =
   sysprop(KotestEngineProperties.assertionMode)?.let { AssertionMode.valueOf(it) }

internal fun parallelism(): Int? =
   sysprop(KotestEngineProperties.parallelism)?.toInt()

internal fun timeout(): Long? =
   sysprop(KotestEngineProperties.timeout)?.toLong()

internal fun invocationTimeout(): Long? =
   sysprop(KotestEngineProperties.invocationTimeout)?.toLong()

internal fun allowMultilineTestName(): Boolean? =
   sysprop(KotestEngineProperties.allowMultilineTestName)?.let { it.uppercase() == "TRUE" }

internal fun concurrentSpecs(): Int? =
   sysprop(KotestEngineProperties.concurrentSpecs)?.toInt()

internal fun concurrentTests(): Int? =
   sysprop(KotestEngineProperties.concurrentTests)?.toInt()

internal fun globalAssertSoftly(): Boolean? =
   sysprop(KotestEngineProperties.globalAssertSoftly)?.let { it.uppercase() == "TRUE" }

internal fun testNameAppendTags(): Boolean? =
   sysprop(KotestEngineProperties.testNameAppendTags)?.let { it.uppercase() == "TRUE" }

internal fun duplicateTestNameMode(): DuplicateTestNameMode? =
   sysprop(KotestEngineProperties.duplicateTestNameMode)?.let { DuplicateTestNameMode.valueOf(it) }

internal fun projectTimeout(): Duration? =
   sysprop(KotestEngineProperties.projectTimeout)?.toLong()?.milliseconds

internal fun logLevel(): LogLevel {
   val levelProp = sysprop(KotestEngineProperties.logLevel)?.let { LogLevel.from(it) }
   val levelEnv = env(KotestEngineProperties.logLevel)?.let { LogLevel.from(it) }

   return levelProp ?: levelEnv ?: LogLevel.Off
}
